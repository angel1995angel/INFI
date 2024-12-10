import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss'],
})
export class ParametrosComponent implements OnInit {
  productos: string[] = ['Menudeo', 'Intervención', 'Mesa de Cambio'];
  parametros: {
    clave: string;
    valor: string;
    descripcion: string;
    tipo: string;
    editando?: boolean;
  }[] = [];
  selectedProducto: string | null = null;
  searchText: string = '';
  searchParametroText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  filteredProductos: string[] = [];
  nuevoParametro: {
    clave: string;
    valor: string;
    descripcion: string;
    tipo: string;
  } = { clave: '', valor: '', descripcion: '', tipo: 'String' };
  tipos: string[] = ['String', 'Numérico', 'Booleano', 'Fecha'];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    // Inicializa los parámetros para el primer producto
    this.selectProducto(this.productos[0]);
    this.filteredProductos = this.productos;
  }

  selectProducto(producto: string): void {
    this.selectedProducto = producto;
    // Aquí puedes cargar los parámetros específicos para el producto seleccionado
    if (producto === 'Menudeo') {
      this.parametros = [
        {
          clave: 'Parámetro Menudeo 1',
          valor: 'Valor 1',
          descripcion: 'Descripción 1',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Menudeo 2',
          valor: 'Valor 2',
          descripcion: 'Descripción 2',
          tipo: 'Numérico',
        },
        {
          clave: 'Parámetro Menudeo 3',
          valor: 'Valor 3',
          descripcion: 'Descripción 3',
          tipo: 'Booleano',
        },
        {
          clave: 'Parámetro Menudeo 4',
          valor: 'Valor 4',
          descripcion: 'Descripción 4',
          tipo: 'Fecha',
        },
        {
          clave: 'Parámetro Menudeo 5',
          valor: 'Valor 5',
          descripcion: 'Descripción 5',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Menudeo 6',
          valor: 'Valor 6',
          descripcion: 'Descripción 6',
          tipo: 'Numérico',
        },
        {
          clave: 'Parámetro Menudeo 7',
          valor: 'Valor 7',
          descripcion: 'Descripción 7',
          tipo: 'Booleano',
        },
        {
          clave: 'Parámetro Menudeo 8',
          valor: 'Valor 8',
          descripcion: 'Descripción 8',
          tipo: 'Fecha',
        },
        {
          clave: 'Parámetro Menudeo 9',
          valor: 'Valor 9',
          descripcion: 'Descripción 9',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Menudeo 10',
          valor: 'Valor 10',
          descripcion: 'Descripción 10',
          tipo: 'Numérico',
        },
      ];
    } else if (producto === 'Intervención') {
      this.parametros = [
        {
          clave: 'Parámetro Intervención 1',
          valor: 'Valor 1',
          descripcion: 'Descripción 1',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Intervención 2',
          valor: 'Valor 2',
          descripcion: 'Descripción 2',
          tipo: 'Numérico',
        },
        {
          clave: 'Parámetro Intervención 3',
          valor: 'Valor 3',
          descripcion: 'Descripción 3',
          tipo: 'Booleano',
        },
        {
          clave: 'Parámetro Intervención 4',
          valor: 'Valor 4',
          descripcion: 'Descripción 4',
          tipo: 'Fecha',
        },
        {
          clave: 'Parámetro Intervención 5',
          valor: 'Valor 5',
          descripcion: 'Descripción 5',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Intervención 6',
          valor: 'Valor 6',
          descripcion: 'Descripción 6',
          tipo: 'Numérico',
        },
        {
          clave: 'Parámetro Intervención 7',
          valor: 'Valor 7',
          descripcion: 'Descripción 7',
          tipo: 'Booleano',
        },
        {
          clave: 'Parámetro Intervención 8',
          valor: 'Valor 8',
          descripcion: 'Descripción 8',
          tipo: 'Fecha',
        },
        {
          clave: 'Parámetro Intervención 9',
          valor: 'Valor 9',
          descripcion: 'Descripción 9',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Intervención 10',
          valor: 'Valor 10',
          descripcion: 'Descripción 10',
          tipo: 'Numérico',
        },
      ];
    } else if (producto === 'Mesa de Cambio') {
      this.parametros = [
        {
          clave: 'Parámetro Mesa de Cambio 1',
          valor: 'Valor 1',
          descripcion: 'Descripción 1',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Mesa de Cambio 2',
          valor: 'Valor 2',
          descripcion: 'Descripción 2',
          tipo: 'Numérico',
        },
        {
          clave: 'Parámetro Mesa de Cambio 3',
          valor: 'Valor 3',
          descripcion: 'Descripción 3',
          tipo: 'Booleano',
        },
        {
          clave: 'Parámetro Mesa de Cambio 4',
          valor: 'Valor 4',
          descripcion: 'Descripción 4',
          tipo: 'Fecha',
        },
        {
          clave: 'Parámetro Mesa de Cambio 5',
          valor: 'Valor 5',
          descripcion: 'Descripción 5',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Mesa de Cambio 6',
          valor: 'Valor 6',
          descripcion: 'Descripción 6',
          tipo: 'Numérico',
        },
        {
          clave: 'Parámetro Mesa de Cambio 7',
          valor: 'Valor 7',
          descripcion: 'Descripción 7',
          tipo: 'Booleano',
        },
        {
          clave: 'Parámetro Mesa de Cambio 8',
          valor: 'Valor 8',
          descripcion: 'Descripción 8',
          tipo: 'Fecha',
        },
        {
          clave: 'Parámetro Mesa de Cambio 9',
          valor: 'Valor 9',
          descripcion: 'Descripción 9',
          tipo: 'String',
        },
        {
          clave: 'Parámetro Mesa de Cambio 10',
          valor: 'Valor 10',
          descripcion: 'Descripción 10',
          tipo: 'Numérico',
        },
      ];
    }
    this.currentPage = 1; // Reset page to 1 when changing product
  }

  modificarParametro(parametro: {
    clave: string;
    valor: string;
    descripcion: string;
    tipo: string;
    editando?: boolean;
  }): void {
    parametro.editando = true;
  }

  guardarParametro(parametro: {
    clave: string;
    valor: string;
    descripcion: string;
    tipo: string;
    editando?: boolean;
  }): void {
    parametro.editando = false;
  }

  agregarParametro(modal: NgbModalRef): void {
    this.parametros.push({ ...this.nuevoParametro, editando: false });
    this.nuevoParametro = {
      clave: '',
      valor: '',
      descripcion: '',
      tipo: 'String',
    };
    modal.close();
  }

  openAgregarParametroModal(content: any): void {
    this.modalService.open(content, { centered: true });
  }

  buscarProductos(): void {
    this.filteredProductos = this.productos.filter((producto) =>
      producto.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  buscarParametros(): void {
    if (this.searchParametroText.trim() === '') {
      this.selectProducto(this.selectedProducto!);
    } else {
      this.parametros = this.parametros.filter(
        (parametro) =>
          parametro.clave
            .toLowerCase()
            .includes(this.searchParametroText.toLowerCase()) ||
          parametro.valor
            .toLowerCase()
            .includes(this.searchParametroText.toLowerCase()) ||
          parametro.descripcion
            .toLowerCase()
            .includes(this.searchParametroText.toLowerCase()) ||
          parametro.tipo
            .toLowerCase()
            .includes(this.searchParametroText.toLowerCase())
      );
    }
  }

  get paginatedParametros(): {
    clave: string;
    valor: string;
    descripcion: string;
    tipo: string;
    editando?: boolean;
  }[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.parametros.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.parametros.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getInputType(tipo: string): string {
    switch (tipo) {
      case 'Numérico':
        return 'number';
      case 'Booleano':
        return 'checkbox';
      case 'Fecha':
        return 'date';
      default:
        return 'text';
    }
  }
}
