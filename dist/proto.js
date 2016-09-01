goog.provide('windmill.GridProto');

goog.require('goog.object');

goog.scope(function() {
/** @enum {number} */
var Fields = {
  BASIC: 1,
  BLACK: 2,
  BLUE: 3,
  CELL: 4,
  CYAN: 5,
  Color: 6,
  DISJOINT: 7,
  DrawType: 8,
  END: 9,
  ERROR: 10,
  Entity: 11,
  GREEN: 12,
  HEXAGON: 13,
  HLINE: 14,
  HORIZONTAL: 15,
  MAGENTA: 16,
  MIDDLE: 17,
  NONE: 18,
  ORANGE: 19,
  Orientation: 20,
  POINT: 21,
  RED: 22,
  ROTATIONAL: 23,
  SQUARE: 24,
  STAR: 25,
  START: 26,
  SegmentType: 27,
  Shape: 28,
  Storage: 29,
  SymmetryType: 30,
  TETRIS: 31,
  TRIANGLE: 32,
  Type: 33,
  UNKNOWN: 34,
  VERTICAL: 35,
  VLINE: 36,
  WHITE: 37,
  YELLOW: 38,
  color: 39,
  count: 40,
  entity: 41,
  free: 42,
  grid: 43,
  horizontal: 44,
  negative: 45,
  orientation: 46,
  shape: 47,
  symmetry: 48,
  triangle_count: 49,
  type: 50,
  vertical: 51,
  width: 52,
};
/** @const {map<string, string>} */
var FromFields = goog.object.transpose(Fields);
var proto =
{
    "package": "GridProto",
    "messages": [
        {
            "name": FromFields[Fields.Entity],
            "fields": [
                {
                    "rule": "optional",
                    "type": FromFields[Fields.Type],
                    "name": FromFields[Fields.type],
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": FromFields[Fields.Color],
                    "name": FromFields[Fields.color],
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": FromFields[Fields.Orientation],
                    "name": FromFields[Fields.orientation],
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": FromFields[Fields.Shape],
                    "name": FromFields[Fields.shape],
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": FromFields[Fields.count],
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": FromFields[Fields.triangle_count],
                    "id": 6
                }
            ]
        },
        {
            "name": FromFields[Fields.Shape],
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": FromFields[Fields.width],
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "bool",
                    "name": FromFields[Fields.grid],
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": FromFields[Fields.free],
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": FromFields[Fields.negative],
                    "id": 4
                }
            ]
        },
        {
            "name": FromFields[Fields.Orientation],
            "fields": [
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": FromFields[Fields.horizontal],
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "sint32",
                    "name": FromFields[Fields.vertical],
                    "id": 2
                }
            ]
        },
        {
            "name": FromFields[Fields.Storage],
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": FromFields[Fields.width],
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": FromFields[Fields.Entity],
                    "name": FromFields[Fields.entity],
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": FromFields[Fields.SymmetryType],
                    "name": FromFields[Fields.symmetry],
                    "id": 3
                }
            ]
        }
    ],
    "enums": [
        {
            "name": FromFields[Fields.Type],
            "values": [
                {
                    "name": FromFields[Fields.UNKNOWN],
                    "id": 0
                },
                {
                    "name": FromFields[Fields.NONE],
                    "id": 1
                },
                {
                    "name": FromFields[Fields.BASIC],
                    "id": 2
                },
                {
                    "name": FromFields[Fields.START],
                    "id": 3
                },
                {
                    "name": FromFields[Fields.END],
                    "id": 4
                },
                {
                    "name": FromFields[Fields.DISJOINT],
                    "id": 5
                },
                {
                    "name": FromFields[Fields.HEXAGON],
                    "id": 6
                },
                {
                    "name": FromFields[Fields.SQUARE],
                    "id": 7
                },
                {
                    "name": FromFields[Fields.STAR],
                    "id": 8
                },
                {
                    "name": FromFields[Fields.TETRIS],
                    "id": 9
                },
                {
                    "name": FromFields[Fields.ERROR],
                    "id": 10
                },
                {
                    "name": FromFields[Fields.TRIANGLE],
                    "id": 11
                }
            ]
        },
        {
            "name": FromFields[Fields.Color],
            "values": [
                {
                    "name": FromFields[Fields.UNKNOWN],
                    "id": 0
                },
                {
                    "name": FromFields[Fields.BLACK],
                    "id": 1
                },
                {
                    "name": FromFields[Fields.WHITE],
                    "id": 2
                },
                {
                    "name": FromFields[Fields.CYAN],
                    "id": 3
                },
                {
                    "name": FromFields[Fields.MAGENTA],
                    "id": 4
                },
                {
                    "name": FromFields[Fields.YELLOW],
                    "id": 5
                },
                {
                    "name": FromFields[Fields.RED],
                    "id": 6
                },
                {
                    "name": FromFields[Fields.GREEN],
                    "id": 7
                },
                {
                    "name": FromFields[Fields.BLUE],
                    "id": 8
                },
                {
                    "name": FromFields[Fields.ORANGE],
                    "id": 9
                }
            ]
        },
        {
            "name": FromFields[Fields.SymmetryType],
            "values": [
                {
                    "name": FromFields[Fields.UNKNOWN],
                    "id": 0
                },
                {
                    "name": FromFields[Fields.NONE],
                    "id": 1
                },
                {
                    "name": FromFields[Fields.HORIZONTAL],
                    "id": 2
                },
                {
                    "name": FromFields[Fields.VERTICAL],
                    "id": 3
                },
                {
                    "name": FromFields[Fields.ROTATIONAL],
                    "id": 4
                }
            ]
        },
        {
            "name": FromFields[Fields.DrawType],
            "values": [
                {
                    "name": FromFields[Fields.UNKNOWN],
                    "id": 0
                },
                {
                    "name": FromFields[Fields.CELL],
                    "id": 1
                },
                {
                    "name": FromFields[Fields.POINT],
                    "id": 2
                },
                {
                    "name": FromFields[Fields.HLINE],
                    "id": 3
                },
                {
                    "name": FromFields[Fields.VLINE],
                    "id": 4
                }
            ]
        },
        {
            "name": FromFields[Fields.SegmentType],
            "values": [
                {
                    "name": FromFields[Fields.UNKNOWN],
                    "id": 0
                },
                {
                    "name": FromFields[Fields.START],
                    "id": 1
                },
                {
                    "name": FromFields[Fields.MIDDLE],
                    "id": 2
                },
                {
                    "name": FromFields[Fields.END],
                    "id": 3
                }
            ]
        }
    ]
}

windmill.GridProto = dcodeIO.ProtoBuf.newBuilder({})['import'](proto).build()['GridProto'];
});
