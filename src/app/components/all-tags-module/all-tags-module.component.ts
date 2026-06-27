import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../service/tags.service';
import { FormsModule } from '@angular/forms'; // Requerido para el buscador bidireccional

interface Tag {
  name: string;
  slug: string;
  url: string;
}

interface TagCategory {
  title: string;
  icon: string;
  description: string;
  colorClass: string;
  tags: Tag[];
}

@Component({
  selector: 'app-all-tags-module',
  standalone: true,
  imports: [FormsModule], // Añadido aquí para habilitar [(ngModel)]
  templateUrl: './all-tags-module.component.html',
})
export class AllTagsModuleComponent implements OnInit {

  // Lista original que viene limpia del servidor
  listTags: Tag[] = [];
  
  // Lista procesada, filtrada y agrupada para la interfaz
  categorizedGroups: TagCategory[] = [];
  
  // Término de búsqueda enlazado al input
  searchTerm: string = '';
  
  loaderTags: boolean = true;

  constructor(
    private tagGetService: TagsService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTags();
    }, 1000);
  }

  public getTags(): void {
    this.tagGetService.getTags().subscribe({
      next: (res) => {
        this.listTags = res;
        this.processAndFilterTags(); // Clasificamos los datos recibidos
        console.log(res);
      },
      error: (err) => {
        console.error(err);
        this.loaderTags = false;
      },
      complete: () => {
        this.loaderTags = false;
      }
    });
  }

  /**
   * Filtra las etiquetas según el buscador y las organiza en las categorías visuales de tu diseño
   */
  public processAndFilterTags(): void {
    const cleanSearch = this.searchTerm.toLowerCase().trim();

    // 1. Filtrar la lista general
    const filteredTags = this.listTags.filter(tag => 
      tag.name.toLowerCase().includes(cleanSearch) || 
      tag.slug.toLowerCase().includes(cleanSearch)
    );

    // 2. Definir la estructura base de las 4 tarjetas (con sus estilos pastel nativos)
    const categories: TagCategory[] = [
      {
        title: 'Atmósferas y Estados',
        icon: '🌿',
        description: 'Etiquetas enfocadas en el mood, el clima, emociones y los sentimientos diarios.',
        colorClass: 'bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100',
        tags: []
      },
      {
        title: 'Espacios y Lugares',
        icon: '📍',
        description: 'Ubicaciones urbanas, países, rincones acogedores y horizontes fotogénicos.',
        colorClass: 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100',
        tags: []
      },
      {
        title: 'Estilo y Dirección de Arte',
        icon: '🎨',
        description: 'Filtros visuales, paletas cromáticas y corrientes artísticas del feed.',
        colorClass: 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100',
        tags: []
      },
      {
        title: 'Temas y Literatura',
        icon: '📚',
        description: 'Géneros narrativos, misterios, historia y temáticas de las publicaciones textuales.',
        colorClass: 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100',
        tags: []
      }
    ];

    // 3. Clasificador Inteligente (Distribuye los ~100 elementos mapeando palabras clave de DummyJSON)
    filteredTags.forEach(tag => {
      const slug = tag.slug.toLowerCase();

      if (slug.includes('love') || slug.includes('life') || slug.includes('peace') || slug.includes('nostalgia') || slug.includes('memory') || slug.includes('serene') || slug.includes('cozy') || slug.includes('night') || slug.includes('sun')) {
        categories[0].tags.push(tag);
      } else if (slug.includes('american') || slug.includes('french') || slug.includes('english') || slug.includes('world') || slug.includes('street') || slug.includes('church') || slug.includes('skyline') || slug.includes('env')) {
        categories[1].tags.push(tag);
      } else if (slug.includes('magical') || slug.includes('art') || slug.includes('classic') || slug.includes('vintage') || slug.includes('cinematic') || slug.includes('color') || slug.includes('minimal')) {
        categories[2].tags.push(tag);
      } else {
        // Todo lo que sea historia, ficción, crimen o temas generales va aquí
        categories[3].tags.push(tag);
      }
    });

    // 4. Guardar solo las categorías que contengan elementos para no mostrar bloques vacíos al buscar
    this.categorizedGroups = categories.filter(cat => cat.tags.length > 0);
  }
}