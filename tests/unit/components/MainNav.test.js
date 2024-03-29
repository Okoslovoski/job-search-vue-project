import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Gordão dos Emprego");
    expect(companyName).toBeInTheDocument;
  });
});
