import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { Show } from "src/app/models/show.model";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
    selector: "app-edit-add-show",
    templateUrl: "./edit-add-show.component.html",
    styleUrls: ["./edit-add-show.component.css"]
})
export class EditAddShowComponent implements OnInit, OnChanges {
    @Input() show: Show;
    @Output() editingFinished = new EventEmitter<Show>();
    showForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        if (!this.show) {
            this.show = {
                "name": '',
                "id": null,
                "url": '',
                "language": '',
                "runtime": 0,
                "officialSite": '',
                "image": {
                    "medium": "",
                    "original": ""
                },
                "summary": ''
            }
            this.initForm();
        }
    }

    ngOnChanges(sx: SimpleChanges) {
        console.log('ngOnChanges', sx);
        this.initForm();

    }

    initForm() {
        this.showForm = this.fb.group({
            name: [this.show.name, Validators.required],
            id: [this.show.id],
            url: [this.show.url, Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/)])],
            language: [this.show.language],
            runtime: [this.show.runtime],
            officialSite: [this.show.officialSite],
            image: [this.show.image],
            summary: [this.show.summary]
        });
    }

    onSubmit() {
        this.show = this.showForm.value;
        this.editingFinished.emit(this.show);
    }

}
