import { useState } from 'react';
import { DIcon } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
 
export default function Table(props: any) {
  const { t } = useTranslation();
  
  let fideicomisos = props.fideicomisos;
  
  return (
    <div>
      <p className="fs-5 mb-3 pb-3 border-bottom text-primary">Útimas solicitudes</p>
      <div className="mb-4">
        <table className="w-100">
          <tbody>
            <tr className="bg-light text-primary">
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Alias</th>
              <th className="px-3 py-2">Instrucción</th>
              <th className="px-3 py-2">Estatus</th>
              <th className="px-3 py-2"></th>
            </tr>
            {fideicomisos.map(function(item: any, index: any) {
              return (
                <tr className="border-bottom" key={index}>
                  <td className="px-3 py-2">{item.name}</td>
                  <td className="px-3 py-2">{item.id}</td>
                  <td className="px-3 py-2">{item.alias}</td>
                  <td className="px-3 py-2">{item.instruction}</td>
                  <td className="px-3 py-2">{item.status}</td>
                  <td className="px-3 py-2"><DIcon icon="three-dots-vertical" size="16px"/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
