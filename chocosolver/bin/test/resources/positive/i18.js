defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_A = Abstract("c0_A");
c0_s = c0_A.addChild("c0_s").withCard(0, 1);
c0_A1 = Clafer("c0_A1").withCard(1, 1).extending(c0_A);
c0_s.refTo(string);
c0_A1.addConstraint(equal(joinRef(join($this(), c0_s)), constant("\"text value\"")));
