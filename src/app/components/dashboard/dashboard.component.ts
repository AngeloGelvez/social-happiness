import { Component, OnInit, OnDestroy } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PostsService } from '../../../service/posts.service';
import { TagsService } from '../../../service/tags.service';
import { CommonModule } from '@angular/common';

declare var Chart: any;

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  public isLoading: boolean = true;
  
  // Métricas
  public totalPosts: number = 0;
  public totalTags: number = 0;
  public totalComments: number = 0;
  public totalUsers: number = 0;
  
  // Datos para renderizar
  public topTags: string[] = [];

  // Instancias de los gráficos
  private activityChartInstance: any;
  private interactionChartInstance: any;

  constructor(
    private postsService: PostsService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    if (this.activityChartInstance) this.activityChartInstance.destroy();
    if (this.interactionChartInstance) this.interactionChartInstance.destroy();
  }

  private loadDashboardData(): void {
    this.isLoading = true;

    forkJoin({
      posts: this.postsService.getPost(1, 0),
      tags: this.tagsService.getTags()
    }).subscribe({
      next: (responses: any) => {
        this.totalPosts = responses.posts.total || 0;
        
        let uniqueData:any[] = [];
        let tagsData = responses.tags || [];
        this.totalTags = tagsData.length;
        tagsData = tagsData.slice(0,5).forEach( (element:any) => {
            uniqueData.push(element.name);
        });;
        

        this.topTags = uniqueData; // Tomamos el top 5 para el gráfico
        
        // Simulaciones (Reemplazar con tus servicios reales si los tienes)
        this.totalComments = 342; 
        this.totalUsers = 108;

        this.isLoading = false;

        setTimeout(() => {
          this.initCharts();
        }, 50);
      },
      error: (err) => {
        console.error('Error cargando el dashboard:', err);
        this.isLoading = false;
      }
    });
  }

  private initCharts(): void {
    // ==========================================
    // 1. GRÁFICO DE BARRAS (Volumen de Etiquetas)
    // ==========================================
    const ctxActivity = document.getElementById('activityChart') as HTMLCanvasElement;
    if (ctxActivity) {
      const ctx = ctxActivity.getContext('2d');
      
      // Crear un gradiente azul para las barras
      let gradientBlue = null;
      if (ctx) {
        gradientBlue = ctx.createLinearGradient(0, 0, 0, 300);
        gradientBlue.addColorStop(0, 'rgba(59, 130, 246, 1)');   // bg-blue-500
        gradientBlue.addColorStop(1, 'rgba(59, 130, 246, 0.2)'); // bg-blue-500/20
      }

      const labels = this.topTags.length > 0 ? this.topTags : ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3', 'Etiqueta 4', 'Etiqueta 5']; 
      const data = [96, 120, 80, 60, 45]; // Datos simulados

      this.activityChartInstance = new Chart(ctxActivity, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Publicaciones',
            data: data,
            backgroundColor: gradientBlue || '#3b82f6',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 8, // Bordes redondeados en la parte superior
            borderSkipped: false,
            barPercentage: 0.5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e293b', // slate-800
              padding: 12,
              titleFont: { family: 'inherit', size: 14 },
              bodyFont: { family: 'inherit', size: 13 },
              cornerRadius: 8,
              displayColors: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#f5f5f4', // stone-100
                borderDash: [5, 5], // Líneas punteadas elegantes
                drawBorder: false
              },
              ticks: { font: { family: 'inherit' }, color: '#a8a29e', padding: 10 }
            },
            x: {
              grid: { display: false },
              ticks: { font: { family: 'inherit', weight: '500' }, color: '#57534e' } // stone-600
            }
          }
        }
      });
    }

    // ==========================================
    // 2. GRÁFICO DE DONA (Interacciones)
    // ==========================================
    const ctxInteraction = document.getElementById('interactionChart') as HTMLCanvasElement;
    if (ctxInteraction) {
      this.interactionChartInstance = new Chart(ctxInteraction, {
        type: 'doughnut',
        data: {
          labels: ['Me gusta', 'Comentarios', 'Compartidos'],
          datasets: [{
            data: [65, 25, 10], 
            backgroundColor: [
              '#10b981', // emerald-500
              '#3b82f6', // blue-500
              '#f59e0b'  // amber-500
            ],
            borderWidth: 4, // Borde blanco para separar los segmentos
            borderColor: '#ffffff',
            borderRadius: 5, // Bordes redondeados en los segmentos
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '75%', 
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 20,
                font: { family: 'inherit', size: 12, weight: '500' },
                color: '#57534e'
              }
            },
            tooltip: {
              backgroundColor: '#1e293b',
              padding: 12,
              cornerRadius: 8,
              bodyFont: { family: 'inherit', size: 13 }
            }
          }
        }
      });
    }
  }
}