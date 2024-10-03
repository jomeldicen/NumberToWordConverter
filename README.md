# NumberToWordConverter

A project using the ASP.NET Core Angular project template

## Description

Logic involves when numerical amount of money converts into words 

## Getting Started

### Tech Stack Used

* Angular CLI: 17.2.2 
* Node: 20.11.1
* .NET Core 8
* Bootstrap 5

### Initial Project Setup

* Open VS 2022, In the Start window (choose File > Start Window to open), select Create a new project.
* Search for Angular in the search bar at the top and then select Angular and ASP.NET Core. 
* I name the project NumberStringConverter and then select Next and create
* It will create 2 Projects NumberStringConverter.Server and NumberStringConverter.Clients
* We can set the project properties after
    * In Solution Explorer, right-click the NumberStringConverter. Server project and choose Properties.
    * In the Properties page, open the Debug tab and select Open debug launch profiles UI option. Uncheck the Launch Browser option for the https profile or the profile named after the ASP.NET Core project, if present.
    * Right-click the solution in Solution Explorer and select Properties. Verify that the Startup project settings are set to Single Startup projects.

### Changes Made

#### API
* In the API, delete the weather forecast controller and associated classes.
* Add New Project by Right-click the solution in Solution Explorer, Add Library and name it NumberStringConverter.BusinessLogic. This will handles all business related logic
* Add New Project by Right-click the solution in Solution Explorer, Add Library and name it NumberStringConverter.Models. This will handles model, DTO, Entities, Enum, Config Class
* Reference 2 Project Library (NumberStringConverter.BusinessLogic and NumberStringConverter.Models) into NumberStringConverter.Server
* In NumberStringConverter.BusinessLogic, 
    * create two folders (Helpers, Services) and inside Services, create Interface folders
    * inside Helpers folder, create static class NumberToWordsHelpers.cs. The content of this class is more on Number to Words conversion processing.
    * inside Services folder, implement repository pattern. Create a Repository Class that implement repository interface and name it ConverterRepository.cs. Create a Interface that defines the contract for data access operations inside Interface folder and name it IConverterRepository.cs
* In NumberStringConverter.Models, 
    * Create DTO folder and create a class that holds our DTO objects and name it ConvertedNumberDTO.cs
* In NumberStringConverter.Server, 
    * In Program.cs, register/inject the repository services that we created 
        * builder.Services.AddScoped<IConverterRepository, ConverterRepository>();
    * Create a controller inside controller folder and name it ConverterController.cs
        * Implement the constructor injection to load the IConverterRepository dependencies
	* Create one endpoint that takes a numerical amount of money and returns the string description. 
        * Name the method ConvertNumberToWord(decimal amount) and the return type is ConvertedNumberDTO object

#### CLIENT UI
* update the app component template and remove the existing content
* run the following command
``` 
npm install
npm install --save bootstrap jquery
```
* modify angular.json and reference the bootstrap into the styles and script under architect->build
* create 2 components, 
    * new component that uses rxjs to read the numerical value from the route parameters and call the API created above then displays the result on the page
    * new component that contains a reactive form with one input for entering a numerical amount of money and a button to lodge the form
* create service that communicates to our API
``` 
ng g c NumberConverterForm --skip-tests
ng g c NumberConverterOutPut --skip-tests
ng g s NumberConverter --skip-tests 
```
* configure app-routing.module.ts and add routes variables
* In app.module.ts, make it sure all components that we added are there. Also, add the ReactiveFormsModule, BrowserModule, HttpClientModule, AppRoutingModule and other dependencies 
* In number-converter.service.ts, implement a logic that communicate in our API
* In number-converter-form.component,
    * in template, create a HTML forms that accept 1 input
    * in ts, create a logic that handle the input 
* In number-converter-output.component.ts,
    * in template, create a HTML layout that display the output
    * in ts, create a logic that reads the input and pass it to the services


## Notes

Please be guided on the comments in the code

## Authors

Jomel Dicen

## Version History

* 0.1
    * Initial Release

## License

N/A

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/jomeldicen/NumberToWordConverter)
