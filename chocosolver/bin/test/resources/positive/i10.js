defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_A = Clafer("c0_A").withCard(1, 1);
c0_x = c0_A.addChild("c0_x").withCard(1, 1);
c0_x.refTo(Int);
c0_x.addConstraint(greaterThanEqual(joinRef($this()), constant(0)));
