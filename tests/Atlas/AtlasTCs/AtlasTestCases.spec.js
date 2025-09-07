import {test,expect} from "@playwright/test"

import { LoginPage } from "../../../pages/AtlasPages/atlas_LoginPage";
import { myDashboard  } from "../../../pages/AtlasPages/atlas_MyDashboard"
import { clientProfile } from "../../../pages/AtlasPages/atlas_ClientProfile";


test('TestCase - 1 - Atlas Login',async({page})=>{

//Navigate to the Atlas URL

const loginPage = new LoginPage(page)
await loginPage.gotoAtlasPage();
await loginPage.login('atlas422','Q3Qa010125')

})

test('TestCase - 2 - Customer Search',async({page})=>{

//Navigate to the Atlas URL

const loginPage = new LoginPage(page)
await loginPage.gotoAtlasPage();
await loginPage.login('atlas422','Q3Qa010125')

const myDashboardPage = new myDashboard(page)
await myDashboardPage.clientSearch('4708')

})

test('TestCase - 3 - Print Client Name',async({page})=>{

//Navigate to the Atlas URL

const loginPage = new LoginPage(page)
await loginPage.gotoAtlasPage();
await loginPage.login('atlas422','Q3Qa010125')

const myDashboardPage = new myDashboard(page)
await myDashboardPage.clientSearch('4708')

const clientProfilePage = new clientProfile(page)
await clientProfilePage.printCustomerName()

})
