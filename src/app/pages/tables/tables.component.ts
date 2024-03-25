import {
  Component,
  OnInit,
  inject,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TablesComponent implements OnInit {
  public content: any = "Hellooooooooooo";
  public projects: any[] = [
    {
      title: "First bid",
      budget: "$2,500 USD",
      status: "open",
      candidates: ["4444444", "444566", "56262", "51"],
    },
    {
      title: "secondBid",
      budget: "$1,800 USD",
      status: "closed",
      candidates: [],
    },
  ];
  constructor() {}

  ngOnInit() {}
  private modalService = inject(NgbModal);

  openBackDropCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { backdropClass: "light-blue-backdrop" });
  }

  openWindowCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { windowClass: "dark-modal" });
  }

  openSm(content: TemplateRef<any>) {
    this.modalService.open(content, { size: "sm" });
  }

  openLg(content: TemplateRef<any>) {
    this.modalService.open(content, { size: "lg" });
  }

  openXl(content: TemplateRef<any>) {
    this.modalService.open(content, { size: "xl" });
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { modalDialogClass: "dark-modal" });
  }
}
