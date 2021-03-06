import { bindable } from 'aurelia-framework';
import { ViewModelBase } from '../services/viewmodelbase';

export class gettingstartedtemplate {
    @bindable viewmodel = null;
}

export class GettingStartedViewModel extends ViewModelBase {
    architectureDiagram: string = '';
    features: string[] = [];
    isDownload: boolean = false;
    requirements: string[] = [];
    pricing: string[] = [];
    subTitle: string;
    templateName: string;
    downloadLink: string;

    constructor() {
        super();
        this.showBack = false;
        this.showPrivacy = true;
        this.subTitle = '';
        this.templateName = '';
    }

    async OnLoaded() {
        if (this.isDownload) {
            let response = await this.MS.HttpService.Execute('Microsoft-GetMsiDownloadLink', {});
            this.downloadLink = response.response.value;
        }
    }
}