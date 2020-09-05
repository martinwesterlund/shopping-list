import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function HelpBtn() {
  return <FontAwesomeIcon class="help-btn" icon={faQuestionCircle} />;
}
