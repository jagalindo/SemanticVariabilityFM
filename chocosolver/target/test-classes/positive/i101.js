scope({c0_Path:2, c0_isDir:2});
defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_Path = Abstract("c0_Path");
c0_p = c0_Path.addChild("c0_p").withCard(0, 1).extending(c0_Path);
c0_isDir = c0_Path.addChild("c0_isDir").withCard(0, 1);
c0_pth = Clafer("c0_pth").withCard(1, 1).extending(c0_Path);
c0_Path.addConstraint(implies(some(join($this(), c0_isDir)), some(join($this(), c0_p))));
