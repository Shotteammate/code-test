# Code Test App

## How to run the project

After you download the project:

Install node modules

### `npm install`

Run project in local by typing below command

### `npm start`

## Project features

- Collapsible table
  - The table can be expanded if the row contains children.
- Table filter
  - The search input can filter by state, district, township and their corresponding columns value after typing input and click the search button.
- Reset button
  - It provides another way to reset the filter instead of searching with empty string.

## How is the project designed

- Data source

  - The data comes from local file ('src/assets/constants/data.js').
  - It is assumed receiving from API response and storing in redux store in real case.
  - The data structure aims to normalize the state shape to provide complex nested structure in store which is more difficult to update the store if necessary.

- <Table /> component
  - It is a stateless component which should avoid to contain logic and displays based on received data.
  - It generates table rows dynamically with recursive way.

- Custom Hooks

  - Custom hooks are created such useTableData as reasons below:
    - Easier to write unit test
      - Extracting the hooks with different data sets to test logic is easier than rendering a component and then test.
      - Testing the logic in hooks is faster.
    - Abstraction (OOP)
      - Showing essential and hiding details help developers to understand the component and to prevent distracted by complex logic.
      - Code splitting which also keeps file small and easier to read

- Utils

  - Utils files are created for reusable functions

- <Navbar /> component

  - It is created in standard way which can use react-router to navigate with other pages using <NavLink/> and <Link/>.
  - Using <Outlet /> with nested routes can keep <Navbar /> fixed at the top of each page.
  - <NavLink/> is suggested to use for active link effects.

- <Background /> component
  - Adding another layer as background instead of setting background in <HeroSection /> / <main> tag provides flexibility for later background effects such as parallax

## UI/UX improvement

- Reset button
  - It provides a way for users to reset the filter.
  - The button is disabled when there is no filtering.
- Showing "No row found." when no data can display.
- Accessibility
  - <button> elements are used to enhance accessibility, so that users can access the table with tab and shift tab.
