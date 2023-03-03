import { Snackbar } from "@mui/material";

function SnackBarDadosInvalidos({
  open,
  closeSnackBarDeletar,
  vertical,
  horizontal,
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={5000}
      onClose={closeSnackBarDeletar}
      message="Dados inválidos"
      key={vertical + horizontal}
    ></Snackbar>
  );
}

export default SnackBarDadosInvalidos;
