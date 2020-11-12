import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {ContentAbout} from "../../components/client/ContentAbout/ContentAbout";
import {ContentInfoAbout} from "../../components/client/ContentInfoAbout/ContentInfoAbout";
import {ContentProgramCourse} from "../../components/client/ContentProgramCourse/ContentProgramCourse";
import {DetailCopyPage} from "./DetailPage";

export const MainPage = () => {
  return(
      <Router>
          <ContentAbout/>
          <ContentInfoAbout/>
          <ContentProgramCourse/>
      </Router>
  )
};
