defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_A = Abstract("c0_A");
c0_a = c0_A.addChild("c0_a").withCard(1, 1);
c0_A1 = Clafer("c0_A1").withCard(1, 1).extending(c0_A);
c0_a.refTo(Int);
c0_A1.addConstraint(equal(joinRef(join($this(), c0_a)), constant(10)));
