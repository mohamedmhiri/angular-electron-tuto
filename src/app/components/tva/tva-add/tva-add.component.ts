import { TvaService } from './../../../services/tva.service';
import { Tva } from './../../../models/tva';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tva-add',
  templateUrl: './tva-add.component.html',
  styleUrls: ['./tva-add.component.css'],
  providers: [TvaService]
})
export class TvaAddComponent implements OnInit {

  public tvaForm: FormGroup
  public TVA: Tva
  public submitted: boolean
  constructor(public fb: FormBuilder, public TVAService: TvaService) {}

  ngOnInit() {
    this.TVA = new Tva()
    this.createForm()
  }

  public createForm () {
    this.tvaForm = this.fb.group({
      code: [this.TVA.code, [Validators.required, Validators.pattern(`^[0-9]{1}`)]],
      valeur: [this.TVA.valeur, [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern(`^(0|6|12|18)$`)]]
    })
    this.tvaForm.valueChanges.subscribe(data => {
      this.onValueChanged(data)
    })

    this.onValueChanged() // (re)set validation messages now
    this.submitted = false
  }

  public pushTva() {
    this.submitted = false
    const formModel = this.tvaForm.value
    const _TVA = new Tva()
    _TVA.code = formModel.code
    _TVA.valeur = formModel.valeur
    /*if (formModel.cin) {
      _TVA.cin = formModel.cin
    }
    if (formModel.email) {
      _TVA.email = formModel.email
    }
    if (formModel.address) {
      _TVA.address = formModel.address
    }
    if (formModel.city) {
      _TVA.city = formModel.city
    }
    if (formModel.gsm) {
      _TVA.gsm = formModel.gsm
    }
    if (formModel.gsm2) {
      _TVA.gsm2 = formModel.gsm2
    }
    if (formModel.country) {
      _TVA.country = formModel.country
    }
    if (formModel.gender) {
      _TVA.gender = formModel.gender
    }
    if (formModel.birthCity) {
      _TVA.birthCity = formModel.birthCity
    }
    if (formModel.birthday) {
      _TVA.birthday = formModel.birthday
    }
    if (formModel.birthmonth) {
      _TVA.birthmonth = formModel.birthmonth
    }
    if (formModel.birthyear) {
      _TVA.birthyear = formModel.birthyear
    }
    if (formModel.ssiType) {
      _TVA.ssiType = formModel.ssiType
    }
    if (formModel.ssiNum) {
      _TVA.ssiNum = formModel.ssiNum
    }*/
    this.TVAService.create(_TVA).subscribe(data => {
      console.log(`${data}`)
      console.log(`successfully added`)
      this.submitted = true
    })
    
  }

  public onValueChanged(data?: any) {
    if (!this.tvaForm) {
      return
    }
    const form = this.tvaForm
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
 
  formErrors = {
    'code': '',
    'valeur': ''
  }
 
  validationMessages = {
    'code': {
      'required':      'Le Code TVA est requis.',
      'pattern':       'Le Code TVA doit avoir un seul caractère.'
    },
    'valeur': {
      'required':      'La Valeur TVA est requis.',
      'minlength':     'La Valeur TVA doit avoir au moins 1 seul caractère.',
      'maxlength':     'La Valeur TVA ne doit pas dépasser 2 caractères.',
      'pattern':       'La Valeur TVA doit être 0 ou 6 ou 12 ou 18 '
    }
  }

}
