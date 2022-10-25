'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {  // criando uma nova tabela 'Users' de acordo com um modelo pré-estabelecido
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty.",
          },
          notNull: {
            args: true,
            msg: "Name cannot be null.",
          },
        },
      },
      uuid: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password cannot be empty.",
          },
          notNull: {
            args: true,
            msg: "Password cannot be null.",
          },
        },
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "CPF cannot be empty.",
          },
          notNull: {
            args: true,
            msg: "CPF cannot be null.",
          },
        },
      },

      language: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          isIn: {
            args: [[0, 1]],
            msg: "The language should be 0 (English), 1 (Portuguese)",
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: {
          msg: "E-mail must be unique.",
        },
      },

      status: {
        type: Sequelize.INTEGER,
        validate: {
          isIn: {
            args: [[0, 1, 2, 3, 4, 5]],
            msg: `The status must be one of the following values: 
                        0 (Active) or 
                        1 (Blocked by Password) or
                        2 (Blocked by User) or 
                        3 (Inactive),
                        4 (Blocked by planExpire),
                        5 (Blocked by misconduct)`,
          },
        },
      },

      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      imagePath: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      pushMail: {
        type: Sequelize.BOOLEAN,
      },

      pushNewFeatures: {
        type: Sequelize.BOOLEAN,
      },

      pushSMS: {
        type: Sequelize.BOOLEAN,
      },

      pushTelegram: {
        type: Sequelize.BOOLEAN,
      },

      pushWhatsapp: {
        type: Sequelize.BOOLEAN,
      },

      addressId: {
        type: Sequelize.INTEGER,
      },

      userType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isIn: {
            args: [[1, 2, 3, 4, 5, 6, 7, 8]],
            msg: `The types must be one of the following values: 
                  1 - Super-Admin
                  2 - Admin
                  3 - Comercial
                  4 - Pedagogo
                  5 - Editor
                  6 - Diretor
                  7 - Coordenador
                  8 - Professor`,
          },
          notNull: {
            args: true,
            msg: "userType cannot be null.",
          },
        },
      },

      cellPhone: {
        type: Sequelize.STRING,
      },

      expireSignatureAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      passwordResetToken: {
        type: Sequelize.STRING,
      },

      passwordResetExpires: {
        type: Sequelize.DATE,
      },

      id_userIugu: {
        type: Sequelize.STRING,
      },

      id_subscribe: {
        type: Sequelize.STRING,
      },

      id_paymentmethod: {
        type: Sequelize.STRING,
      },

      id_categories_selected: {
        type: Sequelize.STRING,
      },

      id_matters_selected: {
        type: Sequelize.STRING,
      },

      timeToExpire: {
        type: Sequelize.DATE,
      },

      token_active: {
        type: Sequelize.TEXT,
      },

      subscriptionSuspendedDate: {
        type: Sequelize.DATE,
      },

      authDevice: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      registration: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      loginAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
     });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users'); // descartando a tabela 'Users'
    
  }
};
