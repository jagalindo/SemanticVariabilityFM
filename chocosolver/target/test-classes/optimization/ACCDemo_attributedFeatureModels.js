scope({c0_ComfortFeature:7, c0_Feature:13, c0_FuelFeature:5, c0_comfort:7, c0_cost:13, c0_fuel:5});
defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_Feature = Abstract("c0_Feature");
c0_Car = Abstract("c0_Car");
c0_ComfortFeature = Abstract("c0_ComfortFeature").extending(c0_Feature);
c0_FuelFeature = Abstract("c0_FuelFeature").extending(c0_ComfortFeature);
c0_cost = c0_Feature.addChild("c0_cost").withCard(1, 1);
c0_comfort = c0_ComfortFeature.addChild("c0_comfort").withCard(1, 1);
c0_fuel = c0_FuelFeature.addChild("c0_fuel").withCard(1, 1);
c0_ABS = c0_Car.addChild("c0_ABS").withCard(0, 1).extending(c0_Feature);
c0_CC = c0_Car.addChild("c0_CC").withCard(0, 1).extending(c0_FuelFeature);
c0_ACC = c0_CC.addChild("c0_ACC").withCard(0, 1).extending(c0_FuelFeature);
c0_Transmission = c0_Car.addChild("c0_Transmission").withCard(1, 1).withGroupCard(1, 1).extending(c0_Feature);
c0_Automatic = c0_Transmission.addChild("c0_Automatic").withCard(0, 1).extending(c0_FuelFeature);
c0_Manual = c0_Transmission.addChild("c0_Manual").withCard(0, 1).extending(c0_FuelFeature);
c0_FCA = c0_Car.addChild("c0_FCA").withCard(0, 1).extending(c0_FuelFeature);
c0_Sensor = c0_FCA.addChild("c0_Sensor").withCard(1, 1).withGroupCard(1, 1).extending(c0_Feature);
c0_Radar = c0_Sensor.addChild("c0_Radar").withCard(0, 1).extending(c0_Feature);
c0_Lidar = c0_Sensor.addChild("c0_Lidar").withCard(0, 1).extending(c0_Feature);
c0_Alert = c0_FCA.addChild("c0_Alert").withCard(0, 1).withGroupCard(1, 1).extending(c0_Feature);
c0_Haptic = c0_Alert.addChild("c0_Haptic").withCard(0, 1).extending(c0_ComfortFeature);
c0_Audible = c0_Alert.addChild("c0_Audible").withCard(0, 1).extending(c0_ComfortFeature);
c0_total_cost = c0_Car.addChild("c0_total_cost").withCard(1, 1);
c0_total_comfort = c0_Car.addChild("c0_total_comfort").withCard(1, 1);
c0_total_fuel = c0_Car.addChild("c0_total_fuel").withCard(1, 1);
c0_aCar = Clafer("c0_aCar").withCard(1, 1).extending(c0_Car);
c0_cost.refTo(Int);
c0_comfort.refTo(Int);
c0_fuel.refTo(Int);
c0_total_cost.refTo(Int);
c0_total_comfort.refTo(Int);
c0_total_fuel.refTo(Int);
c0_Car.addConstraint(implies(some(join($this(), c0_total_cost)), equal(joinRef(join($this(), c0_total_cost)), sum(join(global(c0_Feature), c0_cost)))));
c0_Car.addConstraint(implies(some(join($this(), c0_total_comfort)), equal(joinRef(join($this(), c0_total_comfort)), sum(join(global(c0_ComfortFeature), c0_cost)))));
c0_Car.addConstraint(implies(some(join($this(), c0_total_fuel)), equal(joinRef(join($this(), c0_total_fuel)), sum(join(global(c0_FuelFeature), c0_cost)))));
c0_ABS.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c0_CC.addConstraint(equal(joinRef(join($this(), c0_fuel)), constant(1)));
c0_CC.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(3)));
c0_CC.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(4)));
c0_ACC.addConstraint(equal(joinRef(join($this(), c0_fuel)), constant(2)));
c0_ACC.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(6)));
c0_ACC.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c0_ACC.addConstraint(some(join(joinParent(joinParent($this())), c0_FCA)));
c0_Transmission.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(0)));
c0_Automatic.addConstraint(equal(joinRef(join($this(), c0_fuel)), constant(2)));
c0_Automatic.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(2)));
c0_Automatic.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c0_Manual.addConstraint(equal(joinRef(join($this(), c0_fuel)), constant(0)));
c0_Manual.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(1)));
c0_Manual.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c0_FCA.addConstraint(equal(joinRef(join($this(), c0_fuel)), constant(2)));
c0_FCA.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(4)));
c0_FCA.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(5)));
c0_Sensor.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(0)));
c0_Radar.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c0_Lidar.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(4)));
c0_Alert.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(0)));
c0_Haptic.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(4)));
c0_Haptic.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c0_Audible.addConstraint(equal(joinRef(join($this(), c0_comfort)), constant(2)));
c0_Audible.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(1)));
min(joinRef(join(global(c0_aCar), c0_total_cost)));
min(joinRef(join(global(c0_aCar), c0_total_fuel)));
max(joinRef(join(global(c0_aCar), c0_total_comfort)));
