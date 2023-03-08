import { Snackbar } from "@mui/material";

function SnackBarDadosInvalidos({
  open,
  closeSnackBarDeletar,
  vertical,
  horizontal,
}) {
  const mensagem = "Dados inválidoss";
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={5000}
      onClose={closeSnackBarDeletar}
      message={mensagem}
      key={vertical + horizontal}
    ></Snackbar>
  );
}

export default SnackBarDadosInvalidos;
