let main = {

	variables: {
		turn: 'w',
		selectedPiece: '',
		highlighted: [],
		pieces: {

			//WHITE PIECES
			w_king: {
				position: '5_1',
				img: '&#9812;',
				captured: false,
				moved: false,
				type: 'w_king'
			},
			w_queen: {
				position: '4_1',
				img: '&#9813;',
				captured: false,
				moved: false,
				type: 'w_queen'
			},
			w_bishop1: {
				position: '3_1',
				img: '&#9815;',
				captured: false,
				moved: false,
				type: 'w_bishop'
			},
			w_bishop2: {
				position: '6_1',
				img: '&#9815;',
				captured: false,
				moved: false,
				type: 'w_bishop'
			},
			w_knight1: {
				position: '2_1',
				img: '&#9816;',
				captured: false,
				moved: false,
				type: 'w_knight'
			},
			w_knight2: {
				position: '7_1',
				img: '&#9816;',
				captured: false,
				moved: false,
				type: 'w_knight'
			},
			w_rook1: {
				position: '1_1',
				img: '&#9814;',
				captured: false,
				moved: false,
				type: 'w_rook'
			},
			w_rook2: {
				position: '8_1',
				img: '&#9814;',
				captured: false,
				moved: false,
				type: 'w_rook'
			},
			w_pawn1: {
				position: '1_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn2: {
				position: '2_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn3: {
				position: '3_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn4: {
				position: '4_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn5: {
				position: '5_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn6: {
				position: '6_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn7: {
				position: '7_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},
			w_pawn8: {
				position: '8_2',
				img: '&#9817;',
				captured: false,
				type: 'w_pawn',
				moved: false
			},

			// BLACK PIECES
			b_king: {
				position: '5_8',
				img: '&#9818;',
				captured: false,
				moved: false,
				type: 'b_king'
			},
			b_queen: {
				position: '4_8',
				img: '&#9819;',
				captured: false,
				moved: false,
				type: 'b_queen'
			},
			b_bishop1: {
				position: '3_8',
				img: '&#9821;',
				captured: false,
				moved: false,
				type: 'b_bishop'
			},
			b_bishop2: {
				position: '6_8',
				img: '&#9821;',
				captured: false,
				moved: false,
				type: 'b_bishop'
			},
			b_knight1: {
				position: '2_8',
				img: '&#9822;',
				captured: false,
				moved: false,
				type: 'b_knight'
			},
			b_knight2: {
				position: '7_8',
				img: '&#9822;',
				captured: false,
				moved: false,
				type: 'b_knight'
			},
			b_rook1: {
				position: '1_8',
				img: '&#9820;',
				captured: false,
				moved: false,
				type: 'b_rook'
			},
			b_rook2: {
				position: '8_8',
				img: '&#9820;',
				captured: false,
				moved: false,
				type: 'b_rook'
			},
			b_pawn1: {
				position: '1_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn2: {
				position: '2_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn3: {
				position: '3_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn4: {
				position: '4_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn5: {
				position: '5_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn6: {
				position: '6_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn7: {
				position: '7_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			},
			b_pawn8: {
				position: '8_7',
				img: '&#9823;',
				captured: false,
				type: 'b_pawn',
				moved: false
			}
		}
	},

	methods: {
		gameSetup: function () {
			$('.gamecell').attr('chess', 'null');
			for (let gamePiece in main.variables.pieces) {
				$('#' + main.variables.pieces[gamePiece].position).html(main.variables.pieces[gamePiece].img);
				$('#' + main.variables.pieces[gamePiece].position).attr('chess', gamePiece);
			}
		},

		moveOptions: function (selectedPiece) {
			let position = { x: '', y: '' };
			position.x = main.variables.pieces[selectedPiece].position.split('_')[0];
			position.y = main.variables.pieces[selectedPiece].position.split('_')[1];

			var options = [];
			var coordinates = [];
			var startPoint = main.variables.pieces[selectedPiece].position;
			var c1, c2, c3, c4, c5, c6, c7, c8;

			if (main.variables.highlighted.length != 0) {
				main.methods.toggleHighlight(main.variables.highlighted);
			}

			switch (main.variables.pieces[selectedPiece].type) {
				case 'w_king':
					if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
						coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0 }].map(function () {
							return (parseInt(position.x) + parseInt(val.x) + '_' + parseInt(position.y) + parseInt(val.y));
						});
					} else {
						coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function () {
							return (parseInt(position.x) + parseInt(val.x) + '_' + parseInt(position.y) + parseInt(val.y));
						});
					}

					options = (main.methods.options(startPoint, coordinates, main.variables.pieces[selectedPiece].type)).slice(0);
					main.variables.highlighted = options.slice(0);
					main.methods.toggleHighlight(options);
					break;
			}
		},

		toggleHighlight: function (options) {
			options.forEach(function (element, index, array) {
				$('#' + element).toggleClass("green-shake-little neongreen_txt");
			});
		}
	}
}