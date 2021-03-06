defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_Person = Abstract("c0_Person");
c0_NewBorn = Abstract("c0_NewBorn");
c0_age = c0_Person.addChild("c0_age").withCard(1, 1);
c0_married = c0_Person.addChild("c0_married").withCard(0, 1);
c0_Alice = Clafer("c0_Alice").withCard(1, 1).extending(c0_Person);
c0_baby = Clafer("c0_baby").withCard(1, 1).extending(c0_NewBorn);
c0_age.refTo(Int);
c0_NewBorn.refToUnique(c0_Person);
c0_NewBorn.addConstraint(and(equal(joinRef(join(global(c0_Person), c0_age)), constant(0)), none(join(global(c0_Person), c0_married))));
