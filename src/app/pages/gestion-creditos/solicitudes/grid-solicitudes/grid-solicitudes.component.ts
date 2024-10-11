import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { map, Subscription } from 'rxjs';
import { IButton } from '../../../shared/interfaces/buttonsInterfaces';
import { MatDialog } from '@angular/material/dialog';
import { EstadosDatosService } from '../../../../core/services/estados-datos.service';
import { SolicitudesService } from '../../../../core/services/solicitudes.service';

import { FormSolicitudesComponent } from '../form-solicitudes/form-solicitudes.component';
import { Estados } from '../../../../core/enums/estados';
import { FormApproveComponent } from '../form-approve/form-approve.component';
import { CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { MatTab, MatTabChangeEvent, MatTabContent, MatTabGroup } from '@angular/material/tabs';
import { EstadosSolicitudes } from '../../../../core/enums/estados-solicitudes';
import { Router, RouterLink } from '@angular/router';
import { FuseCardComponent } from '../../../../../@fuse/components/card';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-grid-solicitudes',
  standalone: true,
    imports: [
        CustomTableComponent,
        MatButton,
        MatFormField,
        MatIcon,
        MatInput,
        MatTab,
        MatTabGroup,
        MatTabContent,
        NgIf,
        FuseCardComponent,
        MatMenuTrigger,
        MatMenu,
        MatMenuItem,
        MatDivider,
        NgClass,
        MatTooltip,
        MatAnchor,
        RouterLink,
        MatCheckbox,
        MatProgressBar,
        NgForOf,
        MatIconButton,
    ],
    providers: [
        DatePipe,
        CurrencyPipe
    ],
  templateUrl: './grid-solicitudes.component.html',
  styleUrl: './grid-solicitudes.component.scss'
})
export class GridSolicitudesComponent implements OnInit, OnDestroy{

    public subcription$: Subscription;
    public selectedData: any;
    private datePipe = inject(DatePipe);
    private currencyPipe = inject(CurrencyPipe);
    private router = inject(Router);
    private selectedTab: any = EstadosSolicitudes.APROBADA;

    data = [];



    buttons: IButton[] = [
        {
            label: 'View',
            icon: 'visibility',
            action: (element) => {
                console.log('Approve', element);
                this.selectedData = element;
                this.router.navigate(['pages/gestion-creditos/solicitudes/estados', this.selectedData.id])

            }
        },
    ];

    constructor(
        private _matDialog: MatDialog,
        private estadoDatosService: EstadosDatosService,
        private solicitudService: SolicitudesService
    ) {
    }

    onNew() {
        this._matDialog.open(FormSolicitudesComponent, {
            autoFocus: false,
            data: {
                edit: false,
            },
            maxHeight: '95vh',
            maxWidth: '100%',
            disableClose: true
        })
    }

    getSolicitudes(): void {

        const param = 'Trabajador'

        this.subcription$ = this.solicitudService.getSolicitudes(param).pipe(
            map((response) => {
                response.data.forEach((items) => {
                    if (items.estado) {
                        items.estado = Estados.ACTIVO;
                    }else {
                        items.estado = Estados.INACTIVO;
                    }
                })
                return response;

            }),
            map((response) => {
                response.data.forEach((items) => {
                    items.fechaCreacion = this.datePipe.transform(items.fechaCreacion, 'short');
                    items.cupo = this.currencyPipe.transform(items.cupo, 'USD', 'symbol', '1.2-2');
                })
                return response;
            })
        ).subscribe((response) => {
            if (response) {
                this.data = response.data;
            }else {
                this.data = [];
            }
        }, error => {
            this.data = [];
        })
    }

    private listenGrid() {
        const refreshData$ = this.estadoDatosService.stateGridSolicitudes.asObservable();

        refreshData$.subscribe((states) => {
            if (states.state) {
                console.log('Si entro')
            }
        })

    }


    ngOnDestroy(): void {
        this.subcription$.unsubscribe();
    }

    ngOnInit(): void {
        this.getSolicitudes();
        this.listenGrid();
    }



}
