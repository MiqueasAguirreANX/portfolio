import { Component, OnInit } from '@angular/core';
import { Project } from '../project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    
    {
      imgageUrl: "../../assets/images/FARMACIA.png",
      techsList: ["Angular", "Bulma", "Nodejs + Express" , "SQLITE", "jsPDF", "ng2-charts"],
      projectName: "Pharmacy System",
      mainLanguage: "JavaScript",
      projectDescription: "Management System for a client with a farmacy for a Argentinian Client.",
      projectLink: "https://github.com/MiqueasAguirreANX/Pharmacy-System",
      projectDuration: "2 months"
    },
    {
      imgageUrl: "../../assets/images/GRAPH.png",
      techsList: ["Numpy", "Pandas", "Matplotlib", "Requests", "Algorithms"],
      projectName: "Crypto-Projects Analysis",
      mainLanguage: "Python",
      projectDescription: "Graphical Analysis of +300 repos of Crypto-Projects. More than 24 graphs showing info about the projects for a Canadian Client",
      projectLink: "https://github.com/MiqueasAguirreANX/GraphsProject",
      projectDuration: "1 month"
    },
    {
      imgageUrl: "../../assets/images/GYMNASTA.png",
      techsList: ["Angular", "Bulma", "Nodejs + Express" , "MySQL", "Mercado Pago"],
      projectName: "Gymnasta",
      mainLanguage: "JavaScript",
      projectDescription: "Online platform for personal trainers to upload their videos and people to subscribe to their packages. This is a personal Project",
      projectLink: "Link to Gymnasta",
      projectDuration: "3 months"
    },
    {
      imgageUrl: "../../assets/images/ADMINISTRADOR.jpeg",
      techsList: ["Tkinter", "Numpy", "Matplotlib", "Pandas", "SQLITE"],
      projectName: "Stock System",
      mainLanguage: "Python",
      projectDescription: "Stock management system for small businesses, with sells, buys and statistics. Is a personal Project.",
      projectLink: "https://github.com/MiqueasAguirreANX/ADMINISTRADOR",
      projectDuration: "1 month"
    },
    {
      imgageUrl: "../../assets/images/TEST.png",
      techsList: ["Angular", "Bulma", "Firebase"],
      projectName: "Personality Test",
      mainLanguage: "JavaScript",
      projectDescription: "Online platform with personality test and results screen with user statistics for a Canadian Client.",
      projectLink: "https://test-forest-bbb34.web.app/",
      projectDuration: "2 months"
    },
    {
      imgageUrl: "../../assets/images/ML.jpg",
      techsList: ["Numpy", "Pandas", "ScikitLearn", "Matplotlib", "Seaborn","NTLK"],
      projectName: "Python and Machine Learning class",
      mainLanguage: "Python",
      projectDescription: "10 classes of Python and Machine Learning with Jupyter Notebooks for a Argentinian Client.",
      projectLink: "Not available",
      projectDuration: "1 month"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
