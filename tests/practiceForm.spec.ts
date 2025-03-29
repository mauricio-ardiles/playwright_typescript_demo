import { test, expect} from '@playwright/test';
import { PracticeFormPage } from '../page-object/practiceFormPage';
import { StudentBuilder } from '../builders/studentBuilder';
import { Gender } from '../enums/studentEnum';


test.skip('Validate Practice Form Page', { tag: '@demo',}, async ({ page }) => {
    const practiceFormPage = new PracticeFormPage(page);
    await practiceFormPage.goto();
    await practiceFormPage.validate();
});

test.skip('Create a new Student using required fields', { tag: '@demo',}, async ({ page }) => {
    const practiceFormPage = new PracticeFormPage(page);
    await practiceFormPage.goto();
    await practiceFormPage.validate();
    const studentBuilder = new StudentBuilder();
    const student = studentBuilder.setFirstName('Mauricio')
                                  .setLastName('Ardiles')
                                  .setGender(Gender.Male)
                                  .setMobile('3513333322')
                                  .build();

    console.log(student);
    await practiceFormPage.fillStudentData(studentBuilder);
    await practiceFormPage.clickSubmitButton();
    //TODO: pending validation
});