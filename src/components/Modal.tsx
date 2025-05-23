import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  title: string;
  overview: string;
  vote_average: number;
};

const ModalComp = ({
  open,
  setOpen,
  title,
  overview,
  vote_average,
}: TProps) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Overview: {overview}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Evaluation: {vote_average}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComp;
