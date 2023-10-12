import { useState } from 'react';
import { DInputSelect, DButton, useModalContext } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import NoData from './NoData';
import Table from './Table';
import Filters from './Filters';

export default function Findeicomiso() {
  const { t } = useTranslation();

  const { openModal } = useModalContext();

  const fideicomisos = [
    {id: '3214394132', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '45634413', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Cambio', status: 'Closed'},
    {id: '123123', name: 'Modyo', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '3214394133', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Retiro', status: 'Open'},
    {id: '45634412', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Closed'},
    {id: '909876543', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Cambio', status: 'Open'},
    {id: '3214394134', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '45634414', name: 'Modyo', alias: 'Fideicomiso 2', instruction: 'Retiro', status: 'Closed'},
    {id: '123125', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '3214394135', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Retiro', status: 'Open'},
    {id: '45634415', name: 'Modyo', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '909876544', name: 'BIM', alias: 'FiIdeicomiso 2', instruction: 'Retiro', status: 'Open'},
    {id: '3214394136', name: 'Modyo', alias: 'FiIdeicomiso 2', instruction: 'Retiro', status: 'Open'},
  ];

  const [filtro, setFiltro] = useState({ id: '', name: '', instruction: '', status: '' });
  const [listadoFiltrado, setListadoFiltrado] = useState(fideicomisos);

  const handleFiltrar = (filtro: any) => {
    const filtroId = filtro.id.toLowerCase();
    const filtroName = filtro.name.toLowerCase();
    const filtroInstruction = filtro.instruction.toLowerCase();
    const filtroStatus = filtro.status.toLowerCase();
    const listadoFiltrado = fideicomisos.filter(
      (elemento) =>
        elemento.id.toLowerCase().includes(filtroId) &&
        elemento.name.toLowerCase().includes(filtroName)  &&
        elemento.instruction.toLowerCase().includes(filtroInstruction) &&
        elemento.status.toLowerCase().includes(filtroStatus)
    );
    setListadoFiltrado(listadoFiltrado);
  };

  const [showFilters, setShowFilters] = useState(false);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <div className="row mb-8">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <div className="p-4 bg-white w-100 rounded-2 shadow-sm">
           <button className="w-100 d-block d-md-none btn-block btn btn-outline-primary" onClick={toggleFilters}>{showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}</button>
            <div className={`filters d-md-block mt-3 ${showFilters ? 'd-md-block' : 'd-none'}`}>
              <Filters onFiltrar={handleFiltrar} fideicomisos={fideicomisos} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="p-4 bg-white w-100 rounded-2 shadow-sm">
          {listadoFiltrado.length == 0 ? <NoData /> : null}
          {listadoFiltrado.length > 0 ? <Table fideicomisos={ listadoFiltrado }/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
