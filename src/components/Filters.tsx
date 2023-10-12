import { useState } from 'react';
import { DButton, DInputSelect } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
 
export default function Filters({ onFiltrar, fideicomisos }: { onFiltrar: (filtro: any) => void; fideicomisos: any[] }) {
  const { t } = useTranslation();
  
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

  console.log(optionsNames);

  const [filtro, setFiltro] = useState({ id: '', name: '', instruction: '', status: '' });

  const handleFiltrarClick = () => {
    onFiltrar(filtro);
  };
  
  return (
    <div>
      <div>
        <p className="d-none d-md-block fs-5 pb-3 text-primary">Buscar solicitud</p>
        <div className="mb-4 border-top pt-3">
        <DInputSelect
            innerId="selectNames"
            label="Nombre del fideicomiso"
            onEventChange={(e) => setFiltro({ ...filtro, name: e.detail.value })}
            options={optionsNames}
          />
        </div>
        <div className="mb-4">
          <DInputSelect
            innerId="selectID"
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
            text="Buscar"
            theme="primary"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
