import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, Spinner } from 'reactstrap';

const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <span><Spinner type="grow" color="primary" /></span>
      <Button id="Popover1" color="danger">
        Hint
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>What to do?</PopoverHeader>
        <PopoverBody>
          Add your name and username to display it in the view users section.
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;