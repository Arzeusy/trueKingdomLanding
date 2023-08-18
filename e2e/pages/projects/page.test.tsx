import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "@/app/projects/page";


describe("My information page", ()=>{

    beforeEach(()=>{

    })


    // it("should render properly",()=>{
    //     render(<Projects/>);

    //     const header = screen.getByRole("heading");

    //     console.log(header)
    //     expect(header).toHaveTextContent("Biography")
    // });

    // it("Should have a disable button", ()=>{
    //     render(<Projects/>);
    //     const buttonElement = screen.getByRole("button");

    //     expect(buttonElement).toBeDisabled();
    // });

    it("Should have a tag with classname of blue", ()=>{
        render(<Projects/>);
        const pElement = screen.getByTestId("SubTitle");
        expect(pElement).toHaveTextContent("Biography")

    });
});
