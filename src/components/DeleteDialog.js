import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

function DeleteDialog({
  openDialogDelete,
  fecharDialogoDelete,
  TransitionDelete,
  funcionarioDeletado,
  deletarSim,
  setOpenDialogDelete,
}) {
  return (
    <Dialog
      open={openDialogDelete}
      TransitionComponent={TransitionDelete}
      keepMounted
      onClose={fecharDialogoDelete}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Deseja deletar o usuário ${funcionarioDeletado}?`}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            setOpenDialogDelete(!openDialogDelete);
          }}
        >
          Não
        </Button>
        <Button onClick={deletarSim} autoFocus>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
