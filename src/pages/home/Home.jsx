import {
    MDBCard,
   
  } from "mdb-react-ui-kit";
export function Home(){
    return (
        <div>
            <h3>this is home page</h3>
            <br />
            <br />
            {/* <img src="/images/bae.png" alt="" /> */}
            {/* <img src="/images/logo.png" /> */}
            <div className="cards">
        <MDBCard alignment="center" style={{ maxWidth: "500px" }}>
        <img src="/images/bae.png" alt="" />
        </MDBCard>
      </div>
        </div>

    )
}