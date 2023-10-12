import { useTranslation } from 'react-i18next';
 
export default function NoData() {
  const { t } = useTranslation();

  return (
    <div className="h-100 align-items-center justify-content-center py-8">
     <h5 className="text-center fw-bold text-primary">No hay solicitudes para este filtro</h5>
     <p className="text-center text-muted mt-2">Utilice los select de la columna izquierda para cambiar los filtros</p>
    </div>
  );
}
