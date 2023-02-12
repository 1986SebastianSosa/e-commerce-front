import { FlightLand, FlightTakeoff, Print } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import QRCode from "react-qr-code";
import { format, addDays } from "date-fns";

const OrdersPage = ({ user }) => {
  const ordersList = user.ordersHistory;

  if (ordersList.length === 0)
    return (
      <Box>
        <Typography>Nothing to see... start shop now</Typography>
      </Box>
    );
  return (
    <Stack spacing={2}>
      {ordersList.map((order) => {
        const {
          _id,
          createdAt,
          status,
          shippingDetails,
          products,
          totalPrice,
        } = order;
        const qrText = {
          name: `${user.firstName} ${user.lastName}}`,
          orderId: _id,
          total: totalPrice.toString(),
        };
        return (
          <Paper
            key={_id}
            elevation={3}
            sx={{
              backgroundColor: "#ffffff",
              pt: "1.5rem",
              px: "2rem",
            }}
          >
            <Box sx={{ textAlign: "left", mb: "1rem" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" fontFamily="number" color="secondary">
                  {`Order ID: #${_id.substring(0, 10)}`}
                </Typography>
                <IconButton
                  onClick={() => {
                    window.print();
                  }}
                >
                  <Print color="secondary" />
                </IconButton>
              </Box>

              <Typography>
                <b>Order Status: </b> {status}
              </Typography>
              <Typography>
                <b>Delivered to: </b>
                {shippingDetails.addressLine}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" my="1rem">
              <Typography fontFamily="number">
                <FlightTakeoff color="secondary" /> Order Date:{" "}
                {format(new Date(createdAt), "dd/MM/yyyy-HH:mm")}
              </Typography>
              <Typography fontFamily="number">
                <FlightLand color="secondary" /> Estimated delivery:
                {format(addDays(new Date(createdAt), 5), "dd/MM/yyyy")}
              </Typography>
            </Box>
            <Divider>Order Details</Divider>
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              alignItems="end"
              py="1rem"
            >
              {products.map((product) => {
                const { productQty, productId } = product;
                return (
                  <Box
                    key={productId._id}
                    display="flex"
                    justifyContent="space-between"
                    width="80%"
                  >
                    <Typography textOverflow="ellipsis">{`${productQty}-${productId.name}`}</Typography>
                    <Typography textOverflow="ellipsis">{`U$S ${productId.price}`}</Typography>
                  </Box>
                );
              })}
              <Box
                display="flex"
                justifyContent="space-between"
                width="40%"
                py="1rem"
              >
                <Typography textOverflow="ellipsis" fontWeight="700">
                  Total:
                </Typography>
                <Typography textOverflow="ellipsis" fontWeight="700">
                  {" "}
                  <span
                    style={{ fontFamily: "number" }}
                  >{`U$S${totalPrice}`}</span>
                </Typography>
              </Box>
            </Box>
            <Divider>Payment Details</Divider>
            <Box
              py="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <QRCode
                  value={JSON.stringify(qrText)}
                  size={64}
                  fgColor="#7B8723"
                />
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography>
                  Card N*:{" "}
                  <span style={{ fontFamily: "number" }}>
                    xxxx-xxxx-xxxx-4555
                  </span>{" "}
                </Typography>
                <Typography>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography>{user.address}</Typography>
              </Box>
            </Box>
            <Divider />
            <Typography variant="overline" color="secondary">
              ®Guitarrero | P. Sherman, Wallaby St,{" "}
              <span style={{ fontFamily: "number" }}>42</span>
            </Typography>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default OrdersPage;
