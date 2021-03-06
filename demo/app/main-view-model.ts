import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color';
import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import { CheckBox } from 'nativescript-checkbox';
import observableArrayModule = require("tns-core-modules/data/observable-array");

export class HelloWorldModel extends Observable {
    public data: observableArrayModule.ObservableArray<DataItem>;
    public uberData: observableArrayModule.ObservableArray<DataItem>;
    private _eventLabel: string = "Click text or checkbox";
    private _state: string;
    private _eventCount: number;
    public status: boolean = false;
    constructor() {
        super();
        this._state = "";
        this._eventCount = 0;
        this.data = new observableArrayModule.ObservableArray<DataItem>();
        this.data.push(new DataItem("Brad Martin", false, "#eab557"));
        this.data.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.data.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.data.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData = new observableArrayModule.ObservableArray<DataItem>();
        //Copy\paste ...hacky I know, dont have time to make this elegant atm :)
        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));

        this.uberData.push(new DataItem("Brad Martin", false, "#eab557"));
        this.uberData.push(new DataItem("Nathan Walker", true, "#57bbed"));
        this.uberData.push(new DataItem("Steve McNiven-Scott", false, "#7559e7"));
        this.uberData.push(new DataItem("Ron Burgundy", true, "#eb5481"));
    }

    get eventLabel(): string {
        return this._eventLabel;
    }
    set eventLabel(value: string) {
        if (this._eventLabel !== value) {
            this._eventLabel = value;
            this.notifyPropertyChange("eventLabel", value)
        }
    }

    get state(): string {
        return this._state;
    }
    set state(value: string) {
        this._state = value;
        this.notifyPropertyChange("state", value);
    }

    public updateMessage(state) {
        this._eventCount++;
        this.eventLabel = "Triggered " + this._eventCount + " times, current state:" + state;
    }
    public changed(){
        console.log('changed')
    }
}

export class DataItem {
    constructor(text: string, checked: boolean, color?: string) {
        this.text = text;
        this.checked = checked;

        if (color) {
            this.color = color;
        }
    }

    public text: string;
    public checked: boolean;
    public color: string;
}