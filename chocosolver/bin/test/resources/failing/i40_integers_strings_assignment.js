scope({c0_E1TEntities:3, c0_Entity:3, c0_type:3});
defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_Entity = Abstract("c0_Entity");
c0_type = c0_Entity.addChild("c0_type").withCard(1, 1);
c0_E1 = Clafer("c0_E1").withCard(1, 1).extending(c0_Entity);
c0_E2 = Clafer("c0_E2").withCard(1, 1).extending(c0_Entity);
c0_E3 = Clafer("c0_E3").withCard(1, 1).extending(c0_Entity);
c0_E1TEntities = Clafer("c0_E1TEntities");
c0_type.refTo(string);
c0_E1TEntities.refToUnique(c0_Entity);
Constraint(equal(card(global(c0_E1TEntities)), constant(3)));
c0_E1.addConstraint(equal(joinRef(join($this(), c0_type)), constant("\"E1T\"")));
c0_E2.addConstraint(equal(joinRef(join($this(), c0_type)), constant("\"E1T\"")));
c0_E3.addConstraint(equal(joinRef(join($this(), c0_type)), constant("\"E1T\"")));
c0_E1TEntities.addConstraint(equal(joinRef(join(global(c0_Entity), c0_type)), constant("\"E1T\"")));
