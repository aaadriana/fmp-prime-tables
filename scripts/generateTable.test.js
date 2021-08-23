import generateTable from "./generateTable.js";

test("generateTable should return an empty string when it doesn't receive an array of integers", () => {
  expect(generateTable(1)).toEqual("");
  expect(generateTable({})).toEqual("");
  expect(generateTable(true)).toEqual("");
  expect(generateTable("string")).toEqual("");
  expect(generateTable([])).toEqual("");
});

test("generateTable should return an empty string when it doesn't receive an array of integers", () => {
  expect(generateTable([2, 3, 5])).toEqual(
    "<table><tr><td class='sticky-column sticky-row'></td><td class='sticky-row'>2</td><td class='sticky-row'>3</td><td class='sticky-row'>5</td></tr><td class='sticky-column'>2</td><td>4</td><td>6</td><td>10</td></tr><td class='sticky-column'>3</td><td>6</td><td>9</td><td>15</td></tr><td class='sticky-column'>5</td><td>10</td><td>15</td><td>25</td></tr></table>"
  );
  expect(generateTable([2, 3, 5, 7, 11])).toEqual(
    "<table><tr><td class='sticky-column sticky-row'></td><td class='sticky-row'>2</td><td class='sticky-row'>3</td><td class='sticky-row'>5</td><td class='sticky-row'>7</td><td class='sticky-row'>11</td></tr><td class='sticky-column'>2</td><td>4</td><td>6</td><td>10</td><td>14</td><td>22</td></tr><td class='sticky-column'>3</td><td>6</td><td>9</td><td>15</td><td>21</td><td>33</td></tr><td class='sticky-column'>5</td><td>10</td><td>15</td><td>25</td><td>35</td><td>55</td></tr><td class='sticky-column'>7</td><td>14</td><td>21</td><td>35</td><td>49</td><td>77</td></tr><td class='sticky-column'>11</td><td>22</td><td>33</td><td>55</td><td>77</td><td>121</td></tr></table>"
  );
});
