import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdb-react-ui-kit";
import Avatar from "@mui/material/Avatar";
// import { Avatar } from '@mui/material';
import "./contact.css";

export function Contact() {
  return (
    <div>
      <span>Contact Page</span>
      <br />
      {/* <span>phone: 123-456-7890</span>
      <br />
      <span>email: good-doggo@hololive.jp</span>
      <br /> */}
      <br />
      <br />
      <div className="cards">
        <MDBCard alignment="center" style={{ maxWidth: "500px" }}>
          <MDBCardBody>
              <div className="profile">
              <Avatar
              alt="Remy Sharp"
              src="/images/profile.png" 
              sx={{ width: 100, height: 100 }}
            />
              </div>
              <br />
            <MDBCardTitle>Kittisak Boonpinyo</MDBCardTitle>
            <MDBCardText className="text-muted">
            <span>phone: +669 5248 4609</span><br />
            <span>email: it_bae@baethai.com</span><br />
            </MDBCardText>
            {/* <MDBBtn href="#">Button</MDBBtn> */}
          </MDBCardBody>
          <MDBCardFooter className="text-muted">Planning & Logistic Department.</MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
