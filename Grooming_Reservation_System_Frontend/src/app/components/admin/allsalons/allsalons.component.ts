import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { EditsalonComponent } from '../editsalon/editsalon.component';
import { AdmindataserviceService } from 'src/app/services/admindataservices/admindataservice.service';
import { SalonapprovepopupComponent } from '../../popups/salonapprovepopup/salonapprovepopup.component';

@Component({
  selector: 'app-allsalons',
  templateUrl: './allsalons.component.html',
  styleUrls: ['./allsalons.component.css']
})
export class AllsalonsComponent {

salons: Salon[]=[];
recordsPerPage: string|number;
pagenum: string|number;
msg: string;

  ngOnInit(){
    this.salondataservice.getAllSalon().subscribe(data => this.salons=data);
  }

  deleteSalon(salonid: any) {
    this.msg= 'Deleted';
    this.admindataservice.getSalonById(salonid).subscribe(data=> 
      this.admindataservice.updateSalonById(salonid,data).subscribe(()=>{
        this.matDialog.open(SalonapprovepopupComponent,{width: '250px', data:this.msg});
      }))
  }

  editSalon(salonid: any) {
    this.matDialog.open(EditsalonComponent,{
      width: '800px',
      data:salonid
    })
  }

  constructor(private salondataservice: SalonService, private matDialog: MatDialog, private admindataservice: AdmindataserviceService){}
}
