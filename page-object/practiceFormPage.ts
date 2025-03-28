import { expect , type Locator, type Page} from '@playwright/test';
import { Gender } from '../enums/studentEnum';
import { StudentBuilder } from '../builders/studentBuilder';

export class PracticeFormPage {
    readonly page: Page;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtEmail: Locator;
    readonly optGenderMale: Locator;
    readonly optGenderFemale: Locator;
    readonly optGenderOther: Locator;
    readonly txtMobile: Locator;
    readonly txtDateOfBirthday: Locator;
    readonly txtSubjects: Locator;
    readonly checkHobbiesSports: Locator;
    readonly checkHobbiesReading: Locator;
    readonly checkHobbiesMusic: Locator;
    readonly btnPicture: Locator;
    readonly picture: string;
    readonly txtCurrentAddress: Locator;
    readonly lstState: Locator;
    readonly lstCity: Locator;
    readonly btnSubmit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.locator('#userName-wrapper #firstName');
        this.txtLastName = page.locator('#userName-wrapper #lastName');
        this.txtMobile = page.locator('#userNumber');
        this.optGenderMale = page.getByText('Male', { exact: true });
        this.optGenderFemale = page.getByText('Female', { exact: true });
        this.optGenderOther = page.getByText('Other', { exact: true});
        this.btnSubmit = page.locator('#submit');
    }

    async goto() {
        await this.page.goto('automation-practice-form');
    }

    async validate() {
        await expect(this.txtFirstName, 'Practice Form Page failed loading: FirstName textbox is not visible').toBeVisible();
    }

    async fillFirstName(firstName: string) {
        if (firstName !== '') {
            await this.txtFirstName.click({clickCount: 3});
            await this.page.keyboard.press('Backspace');
            await this.txtFirstName.fill(firstName);
        }
    }

    async fillLatstName(lastName: string) {
        if (lastName !== '') {
            await this.txtLastName.click({clickCount: 3});
            await this.page.keyboard.press('Backspace');
            await this.txtLastName.fill(lastName);
        }
    }

    async selectGender(gender: Gender) {
        if (gender !== Gender.Empty) {
            //TODO: hacerlo optimo para todos los generos
            if (gender === Gender.Male) {
                await this.optGenderMale.click();
            }
        }
    }

    async fillMobile(mobile: string) {
        if (mobile !== '') {
            await this.txtMobile.click({clickCount: 3});
            await this.page.keyboard.press('Backspace');
            await this.txtMobile.fill(mobile);
        }
    }

    async clickSubmitButton() {
        await this.btnSubmit.click();
    }

    async fillStudentData (student: StudentBuilder) {
        await this.fillFirstName(student.firstName);
        await this.fillLatstName(student.lastName);
        await this.selectGender(student.gender);
        await this.fillMobile(student.mobile);
    }
}