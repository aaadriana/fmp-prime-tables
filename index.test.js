test("primeGenerator should always return an array", () => {
  arrayEqual(primeGenerator("hi"), []);
  arrayEqual(primeGenerator(-1), []);
  arrayEqual(primeGenerator(0), []);
  arrayEqual(primeGenerator(1), [2]);
  arrayEqual(primeGenerator(5), [2, 3, 5, 7, 11]);
  arrayEqual(primeGenerator(10), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  arrayEqual(
    primeGenerator(100),
    [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
      151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
      317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
      419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
      503, 509, 521, 523, 541,
    ]
  );
});

test("renderTable should always return a string", () => {
  equal(renderTable(1), "");
  equal(renderTable({}), "");
  equal(renderTable(true), "");
  equal(renderTable("string"), "");
  equal(renderTable([]), "");
  equal(
    renderTable([2, 3, 5, 7, 11]),
    "<table><tr><td class='sticky-column sticky-row'>x</td><td class='sticky-row'>[2]</td><td class='sticky-row'>[3]</td><td class='sticky-row'>[5]</td><td class='sticky-row'>[7]</td><td class='sticky-row'>[11]</td></tr><td class='sticky-column'>[2]</td><td>4</td><td>6</td><td>10</td><td>14</td><td>22</td></tr><td class='sticky-column'>[3]</td><td>6</td><td>9</td><td>15</td><td>21</td><td>33</td></tr><td class='sticky-column'>[5]</td><td>10</td><td>15</td><td>25</td><td>35</td><td>55</td></tr><td class='sticky-column'>[7]</td><td>14</td><td>21</td><td>35</td><td>49</td><td>77</td></tr><td class='sticky-column'>[11]</td><td>22</td><td>33</td><td>55</td><td>77</td><td>121</td></tr></table>"
  );
  equal(
    renderTable([2, 3, 5]),
    "<table><tr><td class='sticky-column sticky-row'>x</td><td class='sticky-row'>[2]</td><td class='sticky-row'>[3]</td><td class='sticky-row'>[5]</td></tr><td class='sticky-column'>[2]</td><td>4</td><td>6</td><td>10</td></tr><td class='sticky-column'>[3]</td><td>6</td><td>9</td><td>15</td></tr><td class='sticky-column'>[5]</td><td>10</td><td>15</td><td>25</td></tr></table>"
  );
});
