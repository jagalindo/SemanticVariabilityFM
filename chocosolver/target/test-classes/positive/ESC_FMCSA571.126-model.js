scope({c0_AckermanSteerAngle:0, c0_AntiLockBreakSystem:0, c0_DriveConfiguration:0, c0_ElectronicStabilityControlSystem:0, c0_GVWR:0, c0_TractionControlSystem:0, c0_Vehicle:0, c0_degree:0, c0_givenAckermanSteerAngle:0, c0_hasOversteer:0, c0_hasUndersteer:0, c0_lateralAcceleration:0, c0_normalYawRate:0, c0_sideSlipAngle:0, c0_speed:0, c0_yawRate:0});
defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_degree = Abstract("c0_degree");
c0_Vehicle = Abstract("c0_Vehicle");
c1_DriveConfiguration = Abstract("c1_DriveConfiguration");
c1_ElectronicStabilityControlSystem = Abstract("c1_ElectronicStabilityControlSystem");
c1_AntiLockBreakSystem = Abstract("c1_AntiLockBreakSystem");
c1_TractionControlSystem = Abstract("c1_TractionControlSystem");
c0_DriveConfiguration = c0_Vehicle.addChild("c0_DriveConfiguration").withCard(1, 1).withGroupCard(1, 1).extending(c1_DriveConfiguration);
c0_ElectronicStabilityControlSystem = c0_Vehicle.addChild("c0_ElectronicStabilityControlSystem").withCard(1, 1).extending(c1_ElectronicStabilityControlSystem);
c0_AntiLockBreakSystem = c0_Vehicle.addChild("c0_AntiLockBreakSystem").withCard(1, 1).extending(c1_AntiLockBreakSystem);
c0_TractionControlSystem = c0_Vehicle.addChild("c0_TractionControlSystem").withCard(1, 1).extending(c1_TractionControlSystem);
c0_AckermanSteerAngle = c0_Vehicle.addChild("c0_AckermanSteerAngle").withCard(1, 1);
c0_speed = c0_Vehicle.addChild("c0_speed").withCard(1, 1);
c0_lateralAcceleration = c0_Vehicle.addChild("c0_lateralAcceleration").withCard(1, 1);
c0_sideSlipAngle = c0_Vehicle.addChild("c0_sideSlipAngle").withCard(1, 1);
c0_yawRate = c0_Vehicle.addChild("c0_yawRate").withCard(1, 1);
c0_normalYawRate = c0_Vehicle.addChild("c0_normalYawRate").withCard(1, 1);
c0_givenAckermanSteerAngle = c0_normalYawRate.addChild("c0_givenAckermanSteerAngle").withCard(1, 1);
c0_hasOversteer = c0_Vehicle.addChild("c0_hasOversteer").withCard(0, 1);
c0_hasUndersteer = c0_Vehicle.addChild("c0_hasUndersteer").withCard(0, 1);
c0_GVWR = c0_Vehicle.addChild("c0_GVWR").withCard(1, 1);
c0_twoWheelDrive = c1_DriveConfiguration.addChild("c0_twoWheelDrive").withCard(0, 1);
c0_frontWheelDrive = c1_DriveConfiguration.addChild("c0_frontWheelDrive").withCard(0, 1);
c0_rearWheelDrive = c1_DriveConfiguration.addChild("c0_rearWheelDrive").withCard(0, 1);
c0_allWheelDrive = c1_DriveConfiguration.addChild("c0_allWheelDrive").withCard(0, 1);
c0_fourWheelDrive = c1_DriveConfiguration.addChild("c0_fourWheelDrive").withCard(0, 1).withGroupCard(1, 1);
c0_highGearWithLockedDifferential = c0_fourWheelDrive.addChild("c0_highGearWithLockedDifferential").withCard(0, 1);
c0_lowGear = c0_fourWheelDrive.addChild("c0_lowGear").withCard(0, 1);
c0_vehicle = c1_ElectronicStabilityControlSystem.addChild("c0_vehicle").withCard(1, 1);
c0_augmentsVehiclesDirectionalStability = c1_ElectronicStabilityControlSystem.addChild("c0_augmentsVehiclesDirectionalStability").withCard(1, 1);
c0_adjustsBrakeTorquesToInduceCorrectingYawMoment = c0_augmentsVehiclesDirectionalStability.addChild("c0_adjustsBrakeTorquesToInduceCorrectingYawMoment").withCard(1, 1);
c0_toEachWheelIndividually = c0_adjustsBrakeTorquesToInduceCorrectingYawMoment.addChild("c0_toEachWheelIndividually").withCard(1, 1);
c0_limits = c1_ElectronicStabilityControlSystem.addChild("c0_limits").withCard(1, 1);
c0_understeer = c0_limits.addChild("c0_understeer").withCard(1, 1);
c0_oversteer = c0_limits.addChild("c0_oversteer").withCard(1, 1);
c0_estimates = c1_ElectronicStabilityControlSystem.addChild("c0_estimates").withCard(1, 1);
c0_YawRate = c0_estimates.addChild("c0_YawRate").withCard(1, 1);
c0_sideSlip = c0_estimates.addChild("c0_sideSlip").withCard(1, 1);
c0_derivativeWithRespectToTime = c0_sideSlip.addChild("c0_derivativeWithRespectToTime").withCard(1, 1);
c0_monitors = c1_ElectronicStabilityControlSystem.addChild("c0_monitors").withCard(1, 1);
c0_driverSteeringInputs = c0_monitors.addChild("c0_driverSteeringInputs").withCard(1, 1);
c0_modifiesEngineTorque = c0_monitors.addChild("c0_modifiesEngineTorque").withCard(1, 1);
c0_isOperational = c1_ElectronicStabilityControlSystem.addChild("c0_isOperational").withCard(0, 1);
c0_duringAllPhasesOfDriving = c0_isOperational.addChild("c0_duringAllPhasesOfDriving").withCard(1, 1);
c0_acceleration = c0_duringAllPhasesOfDriving.addChild("c0_acceleration").withCard(1, 1);
c0_coasting = c0_duringAllPhasesOfDriving.addChild("c0_coasting").withCard(1, 1);
c0_deceleration = c0_duringAllPhasesOfDriving.addChild("c0_deceleration").withCard(1, 1);
c0_breaking = c0_duringAllPhasesOfDriving.addChild("c0_breaking").withCard(1, 1);
c0_withAntiLockBrakeSystem = c0_isOperational.addChild("c0_withAntiLockBrakeSystem").withCard(1, 1);
c0_withTractionControlSystem = c0_isOperational.addChild("c0_withTractionControlSystem").withCard(1, 1);
c0_isNotOperational = c1_ElectronicStabilityControlSystem.addChild("c0_isNotOperational").withCard(1, 1).withGroupCard(1);
c0_whenTurnedOffByTheDriver = c0_isNotOperational.addChild("c0_whenTurnedOffByTheDriver").withCard(0, 1);
c0_whenDrivenInReverse = c0_isNotOperational.addChild("c0_whenDrivenInReverse").withCard(0, 1);
c0_duringSystemInitialization = c0_isNotOperational.addChild("c0_duringSystemInitialization").withCard(0, 1);
c0_Mode = c1_ElectronicStabilityControlSystem.addChild("c0_Mode").withCard(1, 1);
c0_driverSelected = c0_Mode.addChild("c0_driverSelected").withCard(0, 1);
c0_type = c0_Mode.addChild("c0_type").withCard(1, 1).withGroupCard(1, 1);
c0_standard = c0_type.addChild("c0_standard").withCard(0, 1);
c0_performance = c0_type.addChild("c0_performance").withCard(0, 1);
c0_snowOrSlipperyRoad = c0_type.addChild("c0_snowOrSlipperyRoad").withCard(0, 1);
c0_Off = c0_type.addChild("c0_Off").withCard(0, 1);
c0_entersStandardModeAfterIgnition = c1_ElectronicStabilityControlSystem.addChild("c0_entersStandardModeAfterIgnition").withCard(1, 1);
c0_satisfies = c1_ElectronicStabilityControlSystem.addChild("c0_satisfies").withCard(1, 1);
c0_stabilityCriteria = c0_satisfies.addChild("c0_stabilityCriteria").withCard(1, 1);
c0_responsivenessCriterion = c0_satisfies.addChild("c0_responsivenessCriterion").withCard(1, 1);
c0_MalfunctionTelltale = c1_ElectronicStabilityControlSystem.addChild("c0_MalfunctionTelltale").withCard(0, 1).withGroupCard(1);
c0_malfunctionDetected = c0_MalfunctionTelltale.addChild("c0_malfunctionDetected").withCard(0, 1);
c0_mustRemainContinuouslyIlluminatedForAsLongAsMalfunctionExists = c0_malfunctionDetected.addChild("c0_mustRemainContinuouslyIlluminatedForAsLongAsMalfunctionExists").withCard(1, 1);
c0_ignitionLockInOnPosition = c0_MalfunctionTelltale.addChild("c0_ignitionLockInOnPosition").withCard(0, 1);
c0_mustExtinguishAtTheNextIgnitionCycleAfterTheMalfunctionHasBeenCorrected = c0_MalfunctionTelltale.addChild("c0_mustExtinguishAtTheNextIgnitionCycleAfterTheMalfunctionHasBeenCorrected").withCard(0, 1);
c0_flashingWhenInOperation = c0_MalfunctionTelltale.addChild("c0_flashingWhenInOperation").withCard(0, 1);
c0_mustIlluminateWhenIgnitionControlInCheckPosition = c0_MalfunctionTelltale.addChild("c0_mustIlluminateWhenIgnitionControlInCheckPosition").withCard(0, 1);
c0_SystemControls = c1_ElectronicStabilityControlSystem.addChild("c0_SystemControls").withCard(1, 1);
c1_Off = c0_SystemControls.addChild("c1_Off").withCard(1, 1);
c0_ignitionControlPosition = c0_SystemControls.addChild("c0_ignitionControlPosition").withCard(1, 1).withGroupCard(1, 1);
c2_Off = c0_ignitionControlPosition.addChild("c2_Off").withCard(0, 1);
c0_Check = c0_ignitionControlPosition.addChild("c0_Check").withCard(0, 1);
c0_On = c0_ignitionControlPosition.addChild("c0_On").withCard(0, 1);
c0_Start = c0_ignitionControlPosition.addChild("c0_Start").withCard(0, 1);
c0_degree.refTo(Int);
c0_AckermanSteerAngle.refTo(c0_degree);
c0_speed.refTo(Int);
c0_lateralAcceleration.refTo(Int);
c0_sideSlipAngle.refTo(c0_degree);
c0_yawRate.refTo(c0_degree);
c0_normalYawRate.refTo(c0_degree);
c0_GVWR.refTo(Int);
c0_vehicle.refTo(c0_Vehicle);
c0_degree.addConstraint(and(greaterThan(joinRef($this()), constant(0)), lessThanEqual(joinRef($this()), constant(360))));
c0_Vehicle.addConstraint(ifOnlyIf(greaterThan(joinRef(joinRef(join($this(), c0_yawRate))), joinRef(joinRef(join($this(), c0_normalYawRate)))), some(join($this(), c0_hasOversteer))));
c0_Vehicle.addConstraint(ifOnlyIf(lessThan(joinRef(joinRef(join($this(), c0_yawRate))), joinRef(joinRef(join($this(), c0_normalYawRate)))), some(join($this(), c0_hasUndersteer))));
c0_isOperational.addConstraint(greaterThan(joinRef(join(joinRef(join(joinParent($this()), c0_vehicle)), c0_speed)), constant(20)));
