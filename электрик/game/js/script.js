
function geeks() {
	document.getElementById("game").style.opacity = "1";
	document.getElementById("but").style.opacity = "0";
}
var color = 'blue';
var colors = "yellow";
var k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19, k20, k21, k22, k23, k24, k25;
k1 = k2 = k3 = k4 = k5 = k6 = k7 = k8 = k9 = k10 = k11 = k12 = k13 = k14 = k15 = k16 = k17 = k18 = k19 = k20 = k21 = k22 = k23 = k24 = k25 = 0;
var test = 0;

function change() {
	if (k1 == 1) {
		if (k2 == 1) {
			if (k3 == 1) {
				if (k4 == 1) {
					if (k5 == 1) {
						if (k6 == 1) {
							if (k7 == 1) {
								if (k8 == 1) {
									if (k9 == 1) {
										if (k10 == 1) {
											if (k11 == 1) {
												if (k12 == 1) {
													if (k13 == 1) {
														if (k14 == 1) {
															if (k15 == 1) {
																if (k16 == 1) {
																	if (k17 == 1) {
																		if (k18 == 1) {
																			if (k19 == 1) {
																				if (k20 == 1) {
																					if (k21 == 1) {
																						if (k22 == 1) {
																							if (k23 == 1) {
																								if (k24 == 1) {
																									if (k25 == 1) {
																										if (k25 == 1) {
																											test = 1;
																											alert();
																												} else {
																												test = 0;
																												}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	} 
}
//b1,b2,b6
function change_aa() {
	if (test == 0) {
		if (k1 == 0) {
			document.getElementById("b1").style.background = color;
			k1 = 1;
		} else {
			document.getElementById("b1").style.background = colors;
			k1 = 0;
		}
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k6 = 0;
		}
	} else {}
}
//b1,b2,b3,b7
function change_ab() {
	if (test == 0) {
		if (k1 == 0) {
			document.getElementById("b1").style.background = color;
			k1 = 1;
		} else {
			document.getElementById("b1").style.background = colors;
			k1 = 0;
		}
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
	} else {}
}
//b2,b3,b4,b8 
function change_ac() {
	if (test == 0) {
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
	} else {}
}
//b3,b4,b5,b9
function change_ad() {
	if (test == 0) {
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
	} else {}
}
//b4,b5,b10
function change_ae() {
	if (test == 0) {
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
	} else {}
}
//b1,b6,b11,b7
function change_ba() {
	if (test == 0) {
		if (k1 == 0) {
			document.getElementById("b1").style.background = color;
			k1 = 1;
		} else {
			document.getElementById("b1").style.background = colors;
			k1 = 0;
		}
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k6 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
	} else {}
}
//b2,b7,b6,b8,b12
function change_bb() {
	if (test == 0) {
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k6 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
	} else {}
}
//b3,b8,b9,b7,b13
function change_bc() {
	if (test == 0) {
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
	} else {}
}
//b4,b9,b10,b8,b14
function change_bd() {
	if (test == 0) {
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
	} else {}
}
//b5,b10,b15,b9
function change_be() {
	if (test == 0) {
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
	} else {}
}
//b6,b11,b16,b12
function change_ca() {
	if (test == 0) {
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k6 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else{
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
	} else {}
}
//b11,b12,b13,b7,b17
function change_cb() {
	if (test == 0) {
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
	} else {}
}
//b8,b14,b13,b12,b18
function change_cc() {
	if (test == 0) {
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
	} else {}
}
//b9,b15,b14,b13,b19
function change_cd() {
	if (test == 0) {
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
	} else {}
}
//b10,b15,b14,b20
function change_ce() {
	if (test == 0) {
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
	} else {}
}
//b16,b11,b21,b17
function change_da() {
	if (test == 0) {
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
	} else {}
}
//b17,b16,b18,b12,b22
function change_db() {
	if (test == 0) {
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}

		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
	} else {}
}
//b18,b13,b23,b19,b17
function change_dc() {
	if (test == 0) {
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
	} else {}
}
//b19,b20,b24,b14,b18
function change_dd() {
	if (test == 0) {
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
	} else {}
}
//b15,b20,b25,b19
function change_de() {
	if (test == 0) {
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
	} else {}
}
//b16,b22,b21
function change_ea() {
	if (test == 0) {
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
	} else {}
}
//b17,b21,b23,b22
function change_eb() {
	if (test == 0) {
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
	} else {}
}
//b23,b24,b22,b18
function change_ec() {
	if (test == 0) {
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
	} else {}
}
//b23,b25,b24,b19
function change_ed() {
	if (test == 0) {
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
	} else {}
}
//b24,b20,b25
function change_ee() {
	if (test == 0) {
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
	} else {}
}

var count = (function () {
	var counts = 0;
	return function () {
		return counts += 1;
	}
})();

function aa() {
	document.getElementById("ker").innerHTML = count();
}

function ab() {
	document.getElementById("ker").innerHTML = count();
}

function ac() {
	document.getElementById("ker").innerHTML = count();
}

function ad() {
	document.getElementById("ker").innerHTML = count();
}

function ae() {
	document.getElementById("ker").innerHTML = count();
}

function ba() {
	document.getElementById("ker").innerHTML = count();
}

function bb() {
	document.getElementById("ker").innerHTML = count();
}

function bc() {
	document.getElementById("ker").innerHTML = count();
}

function bd() {
	document.getElementById("ker").innerHTML = count();
}

function be() {
	document.getElementById("ker").innerHTML = count();
}

function ca() {
	document.getElementById("ker").innerHTML = count();
}

function cb() {
	document.getElementById("ker").innerHTML = count();
}

function cc() {
	document.getElementById("ker").innerHTML = count();
}

function cd() {
	document.getElementById("ker").innerHTML = count();
}

function ce() {
	document.getElementById("ker").innerHTML = count();
}

function da() {
	document.getElementById("ker").innerHTML = count();
}

function db() {
	document.getElementById("ker").innerHTML = count();
}

function dc() {
	document.getElementById("ker").innerHTML = count();
}

function dd() {
	document.getElementById("ker").innerHTML = count();
}

function de() {
	document.getElementById("ker").innerHTML = count();
}

function ea() {
	document.getElementById("ker").innerHTML = count();
}

function eb() {
	document.getElementById("ker").innerHTML = count();
}

function ec() {
	document.getElementById("ker").innerHTML = count();
}

function ed() {
	document.getElementById("ker").innerHTML = count();
}

function ee() {
	document.getElementById("ker").innerHTML = count();
}