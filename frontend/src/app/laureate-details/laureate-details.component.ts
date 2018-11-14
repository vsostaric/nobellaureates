import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Laureate} from '../model/Laureate';
import {SelectItem} from 'primeng/api';
import {Field} from '../model/Field';
import {LaureateService} from '../services/laureate.service';
import {HttpRequestService} from '../services/http.service';
import {environment} from '../../environments/environment';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-laureate-details',
  templateUrl: './laureate-details.component.html',
  styleUrls: ['./laureate-details.component.css']
})
export class LaureateDetailsComponent implements OnInit {

  @Input()
  display = false;

  @Input()
  updatable = false;

  @Input()
  public laureate: Laureate = new Laureate;

  @Output()
  public closeDialogEvent = new EventEmitter();

  @Output()
  public laureateSaved: EventEmitter<Laureate[]> = new EventEmitter<Laureate[]>();

  public fields: Field[] = [];

  public fieldOptions: SelectItem[] = [];

  public currentYear = new Date().setFullYear(new Date().getFullYear() + 1);

  public firstYear = environment.firstYear;

  constructor(private laureateService: LaureateService,
              private httpService: HttpRequestService) {
  }

  ngOnInit() {
    this.laureateService.getFields().subscribe((fields: Field[]) => {
      this.fields = fields;
      fields.forEach(field => {
        this.fieldOptions.push({
          label: field.name,
          value: field
        });
      });
    });
  }

  saveLaureate(laureate) {

    const body = {
      'id': laureate.id,
      'name': laureate.name,
      'alias': laureate.alias,
      'field': {
        'id': laureate.field.id,
        'name': laureate.field.name
      },
      'year': laureate.year,
      'biography': this.laureate.biography
    };

    this.httpService.sendPostRequest('/laureate/save'
      , body, (res: Laureate[]) => {
        this.closeDialog();
        this.laureateSaved.emit(res);
        this.laureate = new Laureate;
      }, (res) => {
      });
  }

  closeDialog() {
    this.closeDialogEvent.emit();
  }

}
