import { useTranslation } from 'react-i18next';
import { DButton, DModal, useModalContext, DIcon } from '@dynamic-framework/ui-react';

export default function NoFideicomisoSelected() {
  const { t } = useTranslation();
  
  const { closeModal } = useModalContext();

  return (
    <DModal
      name="modal"
      isCentered
      isStatic
      showCloseButton
      footerActionPlacement="fill"
      onEventClose={() => closeModal()}
    >
      <div slot="header">
      </div>
      <div slot="body" className="py-3 px-5 d-flex flex-column align-items-center">
        <DIcon
          circleSize="calc(var(--bs-icon-component-size) * 1)"
          hasCircle
          theme="danger"
          icon="x"
          size="30px"
        />
        <h5 className="mt-3 fw-bold">Información enviada con éxito</h5>
        <p className="mb-3 h6 text-center text-muted">La instrucción se ha realizado correctamente.</p>
        <DButton
          isPill
          onEventClick={() => closeModal()}
          text="Cancelar solicitud"
          theme="danger"
          type="button"
        />
        <DButton
          isPill
          onEventClick={() => closeModal()}
          text="Regresar"
          theme="dark"
          type="button"
          variant='link'
        />
      </div>
    </DModal>
  );
}
