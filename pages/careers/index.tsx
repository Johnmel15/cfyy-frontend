import React, { Component } from "react";
import Image from "next/image";
import Modal from "../../Layout/Modal";
import { CareerContainer } from "@/modules/Career";

interface CareersSectionState {
  isModalOpen: boolean;
}

class CareersSection extends Component<{}, CareersSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    return (
      <div>
        <CareerContainer />
      </div>
    );
  }
}

export default CareersSection;
