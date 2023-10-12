import { useState } from 'react';
import { DInputSelect, DButton } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import NoData from './NoData';
import Table from './Table';

export default function Findeicomiso() {
  const { t } = useTranslation();

  const fideicomisos = [
    {id: '3214394132', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '45634413', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Cambio', status: 'Closed'},
    {id: '123123', name: 'Modyo', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '3214394132', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Retiro', status: 'Open'},
    {id: '45634413', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Closed'},
    {id: '909876543', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Cambio', status: 'Open'},
    {id: '3214394132', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '45634413', name: 'Modyo', alias: 'Fideicomiso 2', instruction: 'Retiro', status: 'Closed'},
    {id: '123123', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '3214394132', name: 'BIM', alias: 'Fideicomiso 2', instruction: 'Retiro', status: 'Open'},
    {id: '45634413', name: 'Modyo', alias: 'Fideicomiso 1', instruction: 'Cambio', status: 'Open'},
    {id: '909876543', name: 'BIM', alias: 'FiIdeicomiso 2', instruction: 'Retiro', status: 'Open'},
    {id: '3214394132', name: 'Modyo', alias: 'FiIdeicomiso 2', instruction: 'Retiro', status: 'Open'},
  ];

  const uniqueIds = [...new Set(fideicomisos.map(item => item.id))];
  const optionsIds = [
    { label: '', value: '' },
    ...uniqueIds.map(id => ({ label: id, value: id })),
  ];
  
  const uniqueNames = [...new Set(fideicomisos.map(item => item.name))];
  const optionsNames = [
    { label: '', value: '' },
    ...uniqueNames.map(name => ({ label: name, value: name })),
  ];

  let [filtro, setFiltro] = useState({ id: '', name: '', instruction: '', status :''});
  let [listadoFiltrado, setListadoFiltrado] = useState(fideicomisos);

  const handleFiltrarClick = () => {
    // Filtrar el listado principal basado en el filtro actual
    const filtroId = filtro.id.toLowerCase();
    const filtroName = filtro.name.toLowerCase();
    const filtroInstruction = filtro.instruction.toLowerCase();
    const filtroStatus = filtro.status.toLowerCase();
    const listadoFiltrado = fideicomisos.filter(
      (elemento) =>
        elemento.id.toLowerCase().includes(filtroId) &&
        elemento.name.toLowerCase().includes(filtroName) &&
        elemento.instruction.toLowerCase().includes(filtroInstruction) &&
        elemento.status.toLowerCase().includes(filtroStatus)
    );
    setListadoFiltrado(listadoFiltrado);
  };

  return (
    <div>
      <div className="row mb-8">
        <div className="col-4">
          <div className="p-4 bg-white w-100 rounded-2 shadow-sm">
            <p className="fs-5 mb-3 pb-3 border-bottom text-primary">Buscar solicitud</p>
            <div className="mb-4">
            <DInputSelect
                innerId="selectId"
                label="Nombre del fideicomiso"
                onEventChange={(e) => setFiltro({ ...filtro, name: e.detail.value })}
                options={optionsNames}
              />
            </div>
            <div className="mb-4">
              <DInputSelect
                innerId="selectName"
                label="Numero del fideicomiso"
                onEventChange={(e) => setFiltro({ ...filtro, id: e.detail.value })}
                options={optionsIds}
              />
            </div>
            <div className="mb-4">
              <DInputSelect
                innerId="selectInstruction"
                label="Instrucción"
                onEventChange={(e) => setFiltro({ ...filtro, instruction: e.detail.value })}
                options={[
                  {
                    label: '',
                    value: ''
                  },
                  {
                    label: 'Cambio',
                    value: 'Cambio'
                  },
                  {
                    label: 'Retiro',
                    value: 'Retiro'
                  }
                ]}
              />
            </div>
            <div className="mb-4">
              <DInputSelect
                innerId="selectStatus"
                label="Estatus"
                onEventChange={(e) => setFiltro({ ...filtro, status: e.detail.value })}
                options={[
                  {
                    label: '',
                    value: ''
                  },
                  {
                    label: 'Open',
                    value: 'Open'
                  },
                  {
                    label: 'Closed',
                    value: 'Closed'
                  }
                ]}
              />
            </div>
            <div className="d-flex">
              <DButton
                onEventClick={() => handleFiltrarClick()}
                text="Filtrar"
                theme="primary"
                type="button"
              />
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="p-4 bg-white w-100 rounded-2 shadow-sm">
          {listadoFiltrado.length == 0 ? <NoData /> : null}
          {listadoFiltrado.length > 0 ? <Table fideicomisos={ listadoFiltrado }/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
