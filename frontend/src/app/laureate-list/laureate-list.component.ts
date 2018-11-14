import {Component, OnInit} from '@angular/core';
import {Laureate} from '../model/Laureate';
import {ConfirmationService} from 'primeng/api';
import {LaureateService} from '../services/laureate.service';
import {HttpRequestService} from '../services/http.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-laureate-list',
  templateUrl: './laureate-list.component.html',
  styleUrls: ['./laureate-list.component.css']
})
export class LaureateListComponent implements OnInit {

  public laureates: Laureate[] = [];

  public laureate: Laureate = new Laureate;

  display = false;
  updatable = false;

  constructor(private laureateService: LaureateService,
              private httpService: HttpRequestService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.laureateService.getLaureates().subscribe((laureates: Laureate[]) => {
      this.laureates = laureates;
    });
  }

  showCreateNewForm() {
    this.display = true;
    this.updatable = true;

    this.laureate = new Laureate();
  }

  showDetails(laureate) {
    this.display = true;
    this.updatable = false;

    this.laureate = laureate;
  }

  showUpdateForm(laureate) {
    this.display = true;
    this.updatable = true;

    this.laureate = laureate;
  }

  removeRow(laureate) {
    this.confirmationService.confirm({
      key: 'deleteConfirmation',
      message: null,
      accept: () => {

        const body = {
          'id': laureate.id
        };

        this.httpService.sendPostRequest('/laureate/delete'
          , body, (res: Laureate[]) => {
            this.laureates = res;
            this.laureate = new Laureate;
            this.messageService.add({severity: 'info', summary: 'Laureate removed'});
          }, (res) => {
          });
      }
    });
  }

  laureateSaved(laureates: Laureate[]) {
    this.laureates = laureates;
    this.laureate = new Laureate;
    this.messageService.add({severity: 'info', summary: 'Laureate saved'});
  }

  closeDialog() {
    this.display = false;
    this.updatable = false;
  }

}
