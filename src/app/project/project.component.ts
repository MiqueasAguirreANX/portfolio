import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project = {
    imgageUrl: "",
    techsList: [],
    projectName: "",
    mainLanguage: "",
    projectDescription: "",
    projectLink: "",
    projectDuration: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

  openProject(link: string) {
    window.open(link)
  }

}
