import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CabinsTable } from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowFrom] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter row</p>
      </Row>

      <Row>
        <CabinsTable />

        <Button onClick={() => setShowFrom((show) => !show)}>
          Add new cabin
        </Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
